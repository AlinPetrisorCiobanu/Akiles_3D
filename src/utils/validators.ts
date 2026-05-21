/**
 * @file Zod validation schemas for forms and data
 */

import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
})

export const RegisterSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
})

export const CheckoutSchema = z.object({
  fullName: z.string().min(2, 'Nombre requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono inválido'),
  street: z.string().min(5, 'Dirección requerida'),
  city: z.string().min(2, 'Ciudad requerida'),
  state: z.string().min(2, 'Estado/Provincia requerida'),
  zipCode: z.string().min(3, 'Código postal requerido'),
  country: z.string().min(2, 'País requerido'),
  paymentMethod: z.enum(['credit_card', 'paypal', 'transfer']),
})

export const ProductFilterSchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  search: z.string().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  sort: z.enum(['name', 'price', 'newest']).optional(),
})

export type LoginInput = z.infer<typeof LoginSchema>
export type RegisterInput = z.infer<typeof RegisterSchema>
export type CheckoutInput = z.infer<typeof CheckoutSchema>
export type ProductFilterInput = z.infer<typeof ProductFilterSchema>

/**
 * Validate form data and return errors
 */
export const validateForm = <T>(schema: z.ZodSchema, data: unknown): { success: boolean; data?: T; errors?: Record<string, string> } => {
  try {
    const result = schema.parse(data)
    return { success: true, data: result as T }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.errors.forEach((err) => {
        const path = err.path.join('.')
        errors[path] = err.message
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: 'Error de validación' } }
  }
}
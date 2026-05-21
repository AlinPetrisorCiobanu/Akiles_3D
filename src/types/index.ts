/**
 * @file Application-wide type definitions
 */

export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  images?: string[]
  materials?: string[]
  dimensions?: string
  colors?: string[]
  inStock: boolean
  quantity?: number
  createdAt: string
  updatedAt: string
}

export interface CartItem {
  id: string
  productId: string
  quantity: number
  product?: Product
}

export interface Cart {
  id: string
  userId: string
  items: CartItem[]
  totalPrice: number
  totalItems: number
  createdAt: string
  updatedAt: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  totalPrice: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  paymentMethod: string
  createdAt: string
  updatedAt: string
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

export interface CartContextType {
  cart: Cart | null
  isLoading: boolean
  error: string | null
  addItem: (product: Product, quantity: number) => Promise<void>
  removeItem: (itemId: string) => Promise<void>
  updateQuantity: (itemId: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  getTotalItems: () => number
  getTotalPrice: () => number
}

export interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationParams {
  page: number
  limit: number
  sort?: string
  order?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
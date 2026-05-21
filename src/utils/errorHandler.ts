/**
 * @file Centralized error handling utilities
 */

export class AppError extends Error {
  constructor(
    public message: string,
    public code: string = 'UNKNOWN_ERROR',
    public statusCode: number = 500,
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const handleApiError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error
  }

  if (error instanceof Error) {
    return new AppError(error.message, 'REQUEST_ERROR')
  }

  return new AppError('Ocurrió un error desconocido', 'UNKNOWN_ERROR')
}

export const getErrorMessage = (error: unknown): string => {
  const appError = handleApiError(error)
  
  const messages: Record<string, string> = {
    INVALID_CREDENTIALS: 'Email o contraseña incorrectos',
    USER_NOT_FOUND: 'Usuario no encontrado',
    USER_EXISTS: 'Este email ya está registrado',
    UNAUTHORIZED: 'No autorizado',
    FORBIDDEN: 'No tiene permisos para esta acción',
    NOT_FOUND: 'Recurso no encontrado',
    VALIDATION_ERROR: 'Los datos proporcionados son inválidos',
    NETWORK_ERROR: 'Error de conexión. Intente más tarde',
    REQUEST_ERROR: 'Error en la solicitud',
    SERVER_ERROR: 'Error del servidor. Intente más tarde',
  }

  return messages[appError.code] || appError.message
}
/**
 * @file Error Context for global error/success notifications
 */

import React, { createContext, useContext, useState, useCallback } from 'react'

export interface ErrorNotification {
  id: string
  type: 'error' | 'success' | 'warning' | 'info'
  message: string
  duration?: number
}

interface ErrorContextType {
  notifications: ErrorNotification[]
  showError: (message: string, duration?: number) => string
  showSuccess: (message: string, duration?: number) => string
  showWarning: (message: string, duration?: number) => string
  showInfo: (message: string, duration?: number) => string
  removeNotification: (id: string) => void
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined)

export const ErrorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<ErrorNotification[]>([])

  const addNotification = useCallback(
    (type: ErrorNotification['type'], message: string, duration = 5000) => {
      const id = `${Date.now()}-${Math.random()}`
      const notification: ErrorNotification = {
        id,
        type,
        message,
        duration,
      }

      setNotifications((prev) => [...prev, notification])

      if (duration > 0) {
        setTimeout(() => {
          setNotifications((prev) => prev.filter((n) => n.id !== id))
        }, duration)
      }

      return id
    },
    [],
  )

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  const showError = useCallback(
    (message: string, duration?: number) => addNotification('error', message, duration),
    [addNotification],
  )

  const showSuccess = useCallback(
    (message: string, duration?: number) => addNotification('success', message, duration),
    [addNotification],
  )

  const showWarning = useCallback(
    (message: string, duration?: number) => addNotification('warning', message, duration),
    [addNotification],
  )

  const showInfo = useCallback(
    (message: string, duration?: number) => addNotification('info', message, duration),
    [addNotification],
  )

  const value: ErrorContextType = {
    notifications,
    showError,
    showSuccess,
    showWarning,
    showInfo,
    removeNotification,
  }

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}

/**
 * Hook to use error context
 */
export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext)
  if (!context) {
    throw new Error('useError must be used within ErrorProvider')
  }
  return context
}

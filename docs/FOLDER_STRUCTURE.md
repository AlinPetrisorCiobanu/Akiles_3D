# Estructura de Carpetas - Akiles 3D

## Visión General
```
src/
├── api/                    # Llamadas HTTP a la API
├── assets/                 # Imágenes, íconos, fuentes
├── components/
│   ├── ui/                 # Componentes reutilizables (Button, Input, Modal, etc)
│   ├── features/           # Componentes específicos de negocio
│   ├── layout/             # Header, Footer, Navbar
│   ├── hero/               # Sección hero con Three.js
│   └── common/             # Componentes comunes (WhatsApp button, etc)
├── context/                # React Context (Auth, Cart, Theme, Error)
├── constants/              # Constantes (rutas, roles, categorías)
├── hooks/                  # Custom hooks (useCart, useAuth, useDebounce, etc)
├── layouts/                # Layouts (MainLayout, AuthLayout, AdminLayout)
├── pages/                  # Páginas/componentes de rutas
├── services/               # Lógica de negocio (authService, cartService, etc)
├── styles/                 # CSS global, variables, animaciones
├── test/                   # Configuración de tests
├── types/                  # TypeScript types e interfaces
├── utils/                  # Utilidades (validators, errorHandler, formatters)
└── main.tsx                # Entry point
```

## Detalles por Carpeta

### api/
Módulos para llamadas HTTP a endpoints específicos
- `axios.js` - Instancia configurada de axios
- `authApi.ts` - Endpoints de autenticación
- `userApi.ts` - Endpoints de usuarios
- `productApi.ts` - Endpoints de productos
- `orderApi.ts` - Endpoints de órdenes
- `categoryApi.ts` - Endpoints de categorías

### components/ui/
Componentes reutilizables y sin lógica de negocio
- `Button.tsx`, `Input.tsx`, `Modal.tsx`
- `ErrorBoundary.tsx` - Captura errores de React
- `LoadingSpinner.tsx` - Indicador de carga
- `Card.tsx` - Componente genérico de tarjeta

### components/features/
Componentes con lógica de negocio
- `ProductCard.tsx` - Tarjeta de producto
- `CartItem.tsx` - Item del carrito
- `OrderList.tsx` - Lista de órdenes
- `UserProfile.tsx` - Perfil de usuario

### context/
React Context Providers
- `AuthContext.tsx` - Contexto de autenticación
- `CartContext.tsx` - Contexto del carrito
- `ThemeContext.tsx` - Contexto de tema (oscuro/claro)
- `ErrorContext.tsx` - Contexto de notificaciones de error

### hooks/
Custom React hooks reutilizables
- `useAuth.jsx` - Hook para autenticación
- `useCart.jsx` - Hook para carrito
- `useProducts.jsx` - Hook para productos
- `useLocalStorage.jsx` - Hook para localStorage
- `useDebounce.jsx` - Hook para debounce

### services/
Lógica de negocio aislada de componentes
- `authService.ts` - Lógica de autenticación
- `cartService.ts` - Lógica del carrito
- `productServices.ts` - Lógica de productos
- `orderService.ts` - Lógica de órdenes

### types/
TypeScript interfaces y tipos
- `index.ts` - Tipos principales (User, Product, Cart, Order, etc)

### utils/
Utilidades y helpers
- `validators.ts` - Schemas Zod para validación
- `errorHandler.ts` - Manejo centralizado de errores
- `formatters.ts` - Funciones de formato (fecha, precio, etc)
- `constants.ts` - Constantes de la app (URLs, claves, etc)

### test/
Configuración de testing
- `setup.ts` - Setup de Vitest y testing-library
- `mocks/` - Mocks de API, servicios, etc

## Convenciones

### Nombres de Archivo
- `PascalCase.tsx` para componentes React
- `camelCase.ts` para servicios, hooks, utilidades
- `UPPERCASE.ts` para constantes

### Imports
Usar aliases configurados en `tsconfig.json`:
```typescript
import { Button } from '@components/ui/Button'
import { useCart } from '@hooks/useCart'
import { Product } from '@types'
import { cartService } from '@services/cartService'
```

### Exports
- Componentes: default export
- Servicios, hooks, utils: named exports
- Types: named exports

## Próximos Pasos
- [ ] Migrar .jsx a .tsx
- [ ] Agregar tipos a servicios y hooks
- [ ] Implementar tests
- [ ] Agregar JSDoc a todo el código
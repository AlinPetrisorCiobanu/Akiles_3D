# Deployment - Akiles 3D

## Opciones de Deploy

### Vercel (Recomendado para Vite + React)

1. Conecta tu repositorio GitHub a Vercel
2. Vercel detectará automáticamente Vite
3. Configurar variables de entorno en Vercel dashboard:
   - VITE_API_URL
   - VITE_API_TIMEOUT
   - Otros según necesites

4. Deploy automático en cada push a main

```bash
# Deploy local para probar
npm run build
npm run preview
```

### Netlify

1. Conecta GitHub a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Agregar variables de entorno en Netlify UI

### GitHub Pages

1. Agregar a `vite.config.js`:
```javascript
export default {
  base: '/Akiles_3D/',
  // ... rest of config
}
```

2. Deploy script en package.json:
```json
"deploy": "npm run build && gh-pages -d dist"
```

## Variables de Entorno en Producción

Asegurate que estos valores estén configurados:
- `VITE_API_URL` - URL de API en producción
- `VITE_APP_ENVIRONMENT` - 'production'
- `VITE_ENABLE_DEV_TOOLS` - false
- `VITE_ENABLE_MOCK_API` - false

## Build Optimizado

```bash
npm run build
```

Verificar que el bundle no sea muy grande:
```bash
npm run build -- --sourcemap
# Analizar bundle con vite-plugin-visualizer
```

## Testing Antes de Deploy

```bash
npm run lint
npm run test
npm run build
npm run preview
```

Accede a http://localhost:5000 y verifica funcionalidades críticas
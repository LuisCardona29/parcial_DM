# UrbaCargo

UrbaCargo es una aplicación móvil de logística urbana sostenible desarrollada con Expo, React Native, TypeScript y Expo Router. El proyecto simula un flujo real de envío con login, perfil, creación de envíos, seguimiento y resumen final.

## Características

- Inicio de sesión y registro con selección de tipo de cuenta
- Dashboard con identidad premium y branding propio
- Perfil editable para usuario particular o empresa
- Creación de envío con flujo visual
- Seguimiento de entrega simulado con mapa y estados
- Resumen final con comprobante y calificación
- Diseño responsive y visual para web y móvil

## Stack

- Expo
- React Native
- TypeScript
- NativeWind
- Expo Router

## Requisitos

- Node.js 18+
- npm o yarn
- Expo Go o emulador

## Instalación

```bash
npm install
npx expo start
```

## Estructura principal

- `app/login.tsx` — pantalla de acceso
- `app/(tabs)/index.tsx` — panel principal
- `app/nuevo-envio.tsx` — creación del envío
- `app/seguimiento/[id].tsx` — seguimiento del transporte
- `app/perfil.tsx` — administración del perfil
- `app/resumen-envio.tsx` — comprobante final
- `components/Brand.tsx` — marca visual de la app
- `components/TrackingMap.*.tsx` — mapa visual para web y native

## Estado del proyecto

Proyecto funcional de demostración para parcial / entrega académica, con enfoque en UX, identidad visual y flujo de usuario completo.

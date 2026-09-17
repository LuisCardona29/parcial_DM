import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';
import { ShipmentProvider } from '../context/ShipmentContext';

export default function RootLayout() {
  return (
    <ShipmentProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="perfil" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="nuevo-envio" />
        <Stack.Screen name="seguimiento/[id]" />
        <Stack.Screen name="resumen-envio" />
      </Stack>
    </ShipmentProvider>
  );
}

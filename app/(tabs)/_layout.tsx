import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return <Tabs screenOptions={({ route }) => ({ headerShown: false, tabBarActiveTintColor: '#059669', tabBarInactiveTintColor: '#64748b', tabBarStyle: { height: 64, paddingTop: 7 }, tabBarIcon: ({ color, size }) => {
    const icons: Record<string, keyof typeof Ionicons.glyphMap> = { index: 'home', envios: 'receipt-outline' };
    return <Ionicons name={icons[route.name]} size={size} color={color} />;
  } })}>
    <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
    <Tabs.Screen name="envios" options={{ title: 'Mis envíos' }} />
  </Tabs>;
}

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShipments } from '../../context/ShipmentContext';

export default function Shipments() {
  const { shipments } = useShipments();
  return <SafeAreaView className="flex-1 bg-slate-50"><ScrollView contentContainerClassName="px-5 pb-6"><View className="mt-4 flex-row items-center justify-between"><View><Text className="text-2xl font-extrabold text-slate-900">Mis envíos</Text><Text className="mt-1 text-slate-500">Historial y estado de tus paquetes.</Text></View><Pressable onPress={() => router.push('/nuevo-envio')} className="rounded-full bg-emerald-600 p-3"><Ionicons name="add" size={20} color="white" /></Pressable></View><View className="mt-6 gap-3">{shipments.map(item => <Pressable key={item.id} onPress={() => router.push(item.status === 'En camino' ? `/seguimiento/${item.id}` : '/resumen-envio')} className="rounded-2xl border border-slate-200 bg-white p-5"><View className="flex-row justify-between"><View className="flex-1"><Text className="font-bold text-slate-900">{item.id}</Text><Text className="mt-1 text-sm text-slate-600">{item.pickup} → {item.destination}</Text></View><Ionicons name="chevron-forward" size={20} color="#94a3b8" /></View><View className="mt-4 flex-row items-center justify-between"><Text className="text-xs text-slate-400">{item.createdAt}</Text><Text className={`rounded-full px-3 py-1 text-xs font-bold ${item.status === 'En camino' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{item.status.toUpperCase()}</Text></View></Pressable>)}</View></ScrollView></SafeAreaView>;
}

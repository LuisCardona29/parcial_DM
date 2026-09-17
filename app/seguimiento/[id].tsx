import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShipments } from '../../context/ShipmentContext';
import TrackingMap from '../../components/TrackingMap';

export default function Tracking() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { shipments } = useShipments();
  const shipment = shipments.find(item => item.id === id);
  const [progress, setProgress] = useState(64);
  useEffect(() => { const timer = setInterval(() => setProgress(value => value >= 88 ? 64 : value + 1), 1800); return () => clearInterval(timer); }, []);
  const minutes = Math.max(4, Math.round((100 - progress) / 4));
  return <SafeAreaView className="flex-1 bg-slate-50"><ScrollView showsVerticalScrollIndicator={false}>
    <View className="bg-[#0f9f6e] px-5 pb-6 pt-3 shadow-lg shadow-emerald-600/20"><View className="flex-row items-center"><Pressable onPress={() => router.back()} className="rounded-full bg-white/15 p-2"><Ionicons name="arrow-back" size={20} color="white" /></Pressable><View className="ml-4 flex-row items-center"><View className="mr-2 h-8 w-8 items-center justify-center rounded-xl bg-white/15"><Ionicons name="location" size={18} color="white" /></View><Text className="text-xl font-extrabold text-white">Seguimiento GPS</Text></View><View className="ml-auto flex-row items-center rounded-full bg-emerald-500 px-3 py-1"><View className="mr-1.5 h-2 w-2 rounded-full bg-white" /><Text className="text-xs font-bold text-white">EN VIVO</Text></View></View><Text className="mt-5 text-sm text-emerald-100">ENVÍO {id}</Text><Text className="mt-1 text-xl font-extrabold text-white">Tu paquete está en camino</Text></View>
    <TrackingMap progress={progress} />
    <View className="mx-5 -mt-4 rounded-3xl bg-slate-900 p-5"><View className="flex-row items-center justify-between"><View><Text className="text-sm text-slate-400">Mensajero asignado</Text><Text className="mt-1 text-lg font-bold text-white">Andrés Ramírez</Text><Text className="mt-1 text-sm text-slate-300">Moto eléctrica · EKT 442</Text></View><View className="h-14 w-14 items-center justify-center rounded-full bg-emerald-500"><Ionicons name="person" size={28} color="white" /></View></View><View className="mt-4 flex-row items-center justify-between"><Text className="text-sm text-emerald-200">Actualizado ahora</Text><Text className="font-bold text-white">A {minutes} min de distancia</Text></View></View>
    <View className="mx-5 mt-5 rounded-3xl border border-slate-200 bg-white p-5"><Text className="text-base font-bold text-slate-900">Estado del envío</Text><Step active label="Paquete recogido" time="10:42 a. m." icon="checkmark" /><Step active label="En ruta al destino" time="Actualizando GPS" icon="bicycle" /><Step label="Entrega confirmada" time="Pendiente" icon="flag" /></View>
    <View className="mx-5 mt-5 rounded-2xl bg-emerald-50 p-4"><Text className="font-bold text-emerald-900">Destino</Text><Text className="mt-1 text-sm text-emerald-800">{shipment?.destination || 'Carrera 8 #12-20, Riohacha'}</Text></View>
  </ScrollView></SafeAreaView>;
}
function Step({ active, label, time, icon }: { active?: boolean; label: string; time: string; icon: keyof typeof Ionicons.glyphMap }) { return <View className="mt-5 flex-row"><View className={`h-9 w-9 items-center justify-center rounded-full ${active ? 'bg-emerald-500' : 'bg-slate-100'}`}><Ionicons name={icon} size={17} color={active ? 'white' : '#94a3b8'} /></View><View className="ml-3"><Text className={`font-semibold ${active ? 'text-slate-900' : 'text-slate-400'}`}>{label}</Text><Text className="mt-0.5 text-xs text-slate-400">{time}</Text></View></View>; }

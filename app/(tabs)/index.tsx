import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BrandMark } from '../../components/Brand';

export default function Dashboard() {
  const { role } = useLocalSearchParams<{ role?: string | string[] }>();
  const accountRole = Array.isArray(role) ? role[0] : role ?? 'Particular';
  const isBusiness = accountRole === 'Empresa';
  const userName = isBusiness ? 'Comercial Norte 👋' : 'Valentina 👋';

  return <SafeAreaView className="flex-1 bg-[#f4f9f7]">
    <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="px-5 pb-8">
      <View className="mt-3 flex-row items-center justify-between">
        <View>
          <Text className="text-sm text-slate-500">Buenos días,</Text>
          <Text className="text-2xl font-extrabold text-slate-900">{userName}</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <Pressable className="rounded-full bg-white p-3 shadow-sm shadow-slate-200" onPress={() => router.push({ pathname: '/perfil', params: { role: accountRole } })}>
            <Ionicons name="person-circle-outline" size={22} color="#047857" />
          </Pressable>
          <View className="rounded-full bg-white p-3 shadow-sm shadow-slate-200">
            <Ionicons name="notifications-outline" size={22} color="#047857" />
          </View>
        </View>
      </View>

      <View className="mt-6 overflow-hidden rounded-[28px] bg-[#0f9f6e] p-6 shadow-lg shadow-emerald-600/20">
        <View className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-400/40" />
        <View className="absolute -left-6 bottom-0 h-20 w-20 rounded-full bg-emerald-300/20" />
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="mr-3">
              <BrandMark size="normal" />
            </View>
            <Text className="text-lg font-bold text-white">UrbaCargo</Text>
          </View>
          <View className="rounded-full bg-white/10 px-3 py-1">
            <Text className="text-[10px] font-bold text-emerald-50">ECO</Text>
          </View>
        </View>
        <Text className="mt-5 text-2xl font-bold leading-8 text-white">Movemos tu ciudad, cuidamos el planeta.</Text>
        <Text className="mt-2 text-sm text-emerald-50">Motos y bicicletas 100% eléctricas.</Text>
      </View>

      <Pressable onPress={() => router.push('/nuevo-envio')} className="mt-5 flex-row items-center justify-between rounded-2xl bg-slate-900 px-5 py-5 shadow-lg shadow-slate-900/15 active:opacity-85">
        <View className="flex-row items-center">
          <View className="rounded-xl bg-white/10 p-2">
            <Ionicons name="add" size={24} color="white" />
          </View>
          <Text className="ml-3 text-base font-bold text-white">Crear nuevo envío</Text>
        </View>
        <Ionicons name="arrow-forward" size={21} color="white" />
      </Pressable>

      <Text className="mt-8 text-lg font-bold text-slate-900">Envío activo</Text>
      <Pressable onPress={() => router.push('/seguimiento/UC-2026-482')} className="mt-3 rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200 active:bg-slate-50">
        <View className="flex-row justify-between">
          <View>
            <Text className="font-bold text-slate-900">UC-2026-482</Text>
            <Text className="mt-1 text-sm text-slate-500">Calle 15 → Carrera 8, Riohacha</Text>
          </View>
          <View className="rounded-full bg-amber-100 px-3 py-1">
            <Text className="text-[10px] font-bold text-amber-700">EN CAMINO</Text>
          </View>
        </View>
        <View className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
          <View className="h-full w-2/3 rounded-full bg-emerald-500" />
        </View>
        <View className="mt-3 flex-row items-center justify-between">
          <Text className="text-sm text-slate-500">Tu mensajero está a 8 min</Text>
          <Text className="font-semibold text-emerald-700">Ver mapa</Text>
        </View>
      </Pressable>

      <Text className="mt-8 text-lg font-bold text-slate-900">¿Por qué UrbaCargo?</Text>
      <View className="mt-3 flex-row gap-3">
        <Feature icon="flash" title="Rápido" text="Envíos el mismo día" />
        <Feature icon="earth" title="Sostenible" text="Flota eléctrica" />
      </View>
    </ScrollView>
  </SafeAreaView>;
}

function Feature({ icon, title, text }: { icon: keyof typeof Ionicons.glyphMap; title: string; text: string }) {
  return <View className="flex-1 rounded-2xl bg-white p-4 shadow-sm shadow-slate-200"><Ionicons name={icon} size={22} color="#059669" /><Text className="mt-3 font-bold text-slate-800">{title}</Text><Text className="mt-1 text-xs text-slate-500">{text}</Text></View>;
}

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BrandMark } from '../components/Brand';

export default function Login() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [role, setRole] = useState<'Particular' | 'Empresa'>('Particular');
  const [email, setEmail] = useState('cliente@urbacargo.co');
  const [password, setPassword] = useState('123456');
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#f4f9f7]">
      <ScrollView contentContainerClassName="px-5 pb-8" showsVerticalScrollIndicator={false}>
        <View className="mt-4 flex-row items-center justify-between">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm shadow-slate-200">
            <Ionicons name="arrow-back" size={20} color="#334155" />
          </View>
          <View className="flex-row items-center gap-2">
            <BrandMark size="normal" />
            <Text className="text-base font-extrabold text-emerald-700">UrbaCargo</Text>
          </View>
          <View className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm shadow-slate-200">
            <Ionicons name="shield-checkmark-outline" size={19} color="#059669" />
          </View>
        </View>

        <View className="mt-7 items-center">
          <BrandMark size="large" />
          <Text className="mt-5 text-4xl font-black text-slate-900">UrbaCargo</Text>
          <Text className="mt-2 text-center text-sm text-slate-500">Envíos rápidos, sostenibles y seguros.</Text>
        </View>

        <View className="mt-8 rounded-[28px] bg-white p-4 shadow-lg shadow-slate-200/70">
          <View className="flex-row rounded-2xl bg-slate-200/70 p-1">
            <Tab active={mode === 'login'} label="Iniciar sesión" onPress={() => setMode('login')} />
            <Tab active={mode === 'register'} label="Registrarse" onPress={() => setMode('register')} />
          </View>

          <Text className="mt-5 text-sm font-bold text-slate-800">Tipo de cuenta</Text>
          <View className="mt-2 flex-row gap-3">
            <Role active={role === 'Particular'} icon="person-outline" label="Particular" onPress={() => setRole('Particular')} />
            <Role active={role === 'Empresa'} icon="business-outline" label="Empresa" onPress={() => setRole('Empresa')} />
          </View>

          <Field label="Correo electrónico" icon="mail-outline" value={email} onChange={setEmail} email />
          <Field label="Contraseña" icon="lock-closed-outline" value={password} onChange={setPassword} password />

          <View className="mt-3 flex-row items-center justify-between">
            <Pressable onPress={() => setRememberMe(value => !value)} className="flex-row items-center">
              <View className={`mr-2 h-5 w-5 items-center justify-center rounded-md border ${rememberMe ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300 bg-white'}`}>
                {rememberMe && <Ionicons name="checkmark" size={12} color="white" />}
              </View>
              <Text className="text-sm text-slate-600">Recordarme</Text>
            </Pressable>
            <Text className="text-xs font-semibold text-emerald-700">¿Olvidaste tu contraseña?</Text>
          </View>

          <Pressable
            onPress={() => router.replace({ pathname: '/(tabs)', params: { role } })}
            className="mt-5 flex-row items-center justify-center rounded-2xl bg-[#0f9f6e] py-4 shadow-md shadow-emerald-600/30"
          >
            <Text className="mr-2 text-base font-bold text-white">{mode === 'login' ? 'Ingresar a UrbaCargo' : 'Crear mi cuenta'}</Text>
            <Ionicons name="arrow-forward" size={18} color="white" />
          </Pressable>
        </View>

        <View className="my-6 flex-row items-center">
          <View className="h-px flex-1 bg-slate-200" />
          <Text className="mx-3 text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400">o continúa con</Text>
          <View className="h-px flex-1 bg-slate-200" />
        </View>

        <View className="gap-3">
          <SocialButton provider="Google" icon="logo-google" color="#EA4335" />
          <SocialButton provider="Apple" icon="logo-apple" color="#111827" />
          <SocialButton provider="WhatsApp" icon="logo-whatsapp" color="#16A34A" />
        </View>

        <View className="mt-6 flex-row items-center justify-center rounded-2xl bg-emerald-50 px-4 py-3">
          <Ionicons name="leaf" size={16} color="#059669" />
          <Text className="ml-2 text-xs font-medium text-emerald-800">Cada envío reduce emisiones en la ciudad.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Tab({ active, label, onPress }: { active: boolean; label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} className={`flex-1 items-center rounded-xl py-2.5 ${active ? 'bg-white' : ''}`}>
      <Text className={`text-sm ${active ? 'font-bold text-slate-900' : 'text-slate-500'}`}>{label}</Text>
    </Pressable>
  );
}

function Role({ active, icon, label, onPress }: { active: boolean; icon: keyof typeof Ionicons.glyphMap; label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} className={`flex-1 flex-row items-center justify-center rounded-xl border py-3 ${active ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
      <Ionicons name={icon} size={18} color={active ? '#059669' : '#64748b'} />
      <Text className={`ml-2 text-sm ${active ? 'font-bold text-emerald-800' : 'text-slate-600'}`}>{label}</Text>
    </Pressable>
  );
}

function Field({ label, icon, value, onChange, email, password }: { label: string; icon: keyof typeof Ionicons.glyphMap; value: string; onChange: (value: string) => void; email?: boolean; password?: boolean }) {
  return (
    <View className="mt-4">
      <Text className="mb-2 text-sm font-semibold text-slate-700">{label}</Text>
      <View className="flex-row items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
        <Ionicons name={icon} size={18} color="#64748b" />
        <TextInput
          value={value}
          onChangeText={onChange}
          autoCapitalize="none"
          keyboardType={email ? 'email-address' : 'default'}
          secureTextEntry={password}
          className="ml-3 flex-1 py-3.5 text-base text-slate-900"
          placeholderTextColor="#94a3b8"
        />
      </View>
    </View>
  );
}

function SocialButton({ provider, icon, color }: { provider: string; icon: keyof typeof Ionicons.glyphMap; color: string }) {
  return (
    <Pressable className="flex-row items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3.5">
      <Ionicons name={icon} size={20} color={color} />
      <Text className="ml-3 text-sm font-semibold text-slate-700">Continuar con {provider}</Text>
    </Pressable>
  );
}

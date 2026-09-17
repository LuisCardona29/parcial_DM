import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const personalProfile = {
  name: 'Valentina García',
  email: 'cliente@urbacargo.co',
  phone: '+57 301 456 8921',
  city: 'Riohacha',
};

const businessProfile = {
  name: 'UrbanFlow SAS',
  email: 'empresa@urbacargo.co',
  phone: '+57 300 876 3344',
  city: 'Bogotá',
};

export default function Perfil() {
  const { role } = useLocalSearchParams<{ role?: string | string[] }>();
  const accountRole = Array.isArray(role) ? role[0] : role ?? 'Particular';
  const isBusiness = accountRole === 'Empresa';
  const [profile, setProfile] = useState(isBusiness ? businessProfile : personalProfile);
  const [isEditing, setIsEditing] = useState(false);

  useState(() => {
    setProfile(isBusiness ? businessProfile : personalProfile);
  });

  const updateField = (field: keyof typeof personalProfile, value: string) => {
    setProfile(current => ({ ...current, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView contentContainerClassName="px-5 pb-8" showsVerticalScrollIndicator={false}>
        <View className="mt-3 flex-row items-center justify-between">
          <Pressable onPress={() => router.back()} className="rounded-full bg-white p-2 shadow-sm shadow-slate-200">
            <Ionicons name="arrow-back" size={20} color="#0f172a" />
          </Pressable>
          <Text className="text-xl font-extrabold text-slate-900">Perfil</Text>
          <Pressable onPress={() => router.replace('/login')} className="rounded-full bg-emerald-100 p-2">
            <Ionicons name="log-out-outline" size={20} color="#047857" />
          </Pressable>
        </View>

        <View className="mt-6 items-center rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <Ionicons name="person" size={38} color="#047857" />
          </View>
          <Text className="mt-4 text-2xl font-extrabold text-slate-900">{profile.name}</Text>
          <Text className="mt-1 text-sm text-slate-500">{profile.email}</Text>
          <View className="mt-4 flex-row items-center rounded-full bg-emerald-50 px-3 py-1.5">
            <Ionicons name="shield-checkmark" size={14} color="#059669" />
            <Text className="ml-2 text-xs font-bold text-emerald-700">{isBusiness ? 'Empresa verificada' : 'Cuenta verificada'}</Text>
          </View>
        </View>

        <View className="mt-6 rounded-3xl bg-white p-5 shadow-sm shadow-slate-200">
          <Text className="text-lg font-bold text-slate-900">Información personal</Text>

          <Field label="Nombre" value={profile.name} icon="person-outline" editable={isEditing} onChangeText={value => updateField('name', value)} />
          <Field label="Correo" value={profile.email} icon="mail-outline" editable={isEditing} onChangeText={value => updateField('email', value)} />
          <Field label="Teléfono" value={profile.phone} icon="call-outline" editable={isEditing} onChangeText={value => updateField('phone', value)} />
          <Field label="Ciudad" value={profile.city} icon="location-outline" editable={isEditing} onChangeText={value => updateField('city', value)} />
        </View>

        <View className="mt-6 rounded-3xl bg-white p-5 shadow-sm shadow-slate-200">
          <Text className="text-lg font-bold text-slate-900">Preferencias</Text>
          <Pressable className="mt-4 flex-row items-center justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={18} color="#475569" />
              <Text className="ml-3 text-slate-700">Notificaciones</Text>
            </View>
            <Text className="text-sm font-semibold text-emerald-700">Activadas</Text>
          </Pressable>

          <Pressable className="flex-row items-center justify-between border-t border-slate-100 py-3">
            <View className="flex-row items-center">
              <Ionicons name="moon-outline" size={18} color="#475569" />
              <Text className="ml-3 text-slate-700">Modo oscuro</Text>
            </View>
            <Text className="text-sm font-semibold text-slate-400">No</Text>
          </Pressable>

          <Pressable className="flex-row items-center justify-between border-t border-slate-100 py-3">
            <View className="flex-row items-center">
              <Ionicons name="language-outline" size={18} color="#475569" />
              <Text className="ml-3 text-slate-700">Idioma</Text>
            </View>
            <Text className="text-sm font-semibold text-slate-500">Español</Text>
          </Pressable>
        </View>

        {isEditing ? (
          <Pressable onPress={handleSave} className="mt-6 flex-row items-center justify-center rounded-2xl bg-emerald-600 py-4">
            <Ionicons name="checkmark-done-outline" size={18} color="white" />
            <Text className="ml-2 font-bold text-white">Guardar cambios</Text>
          </Pressable>
        ) : (
          <Pressable onPress={() => setIsEditing(true)} className="mt-6 flex-row items-center justify-center rounded-2xl bg-slate-900 py-4">
            <Ionicons name="pencil-outline" size={18} color="white" />
            <Text className="ml-2 font-bold text-white">Editar perfil</Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function Field({ label, value, icon, editable, onChangeText }: { label: string; value: string; icon: keyof typeof Ionicons.glyphMap; editable: boolean; onChangeText: (value: string) => void }) {
  return (
    <View className="mt-4">
      <Text className="mb-2 text-xs font-bold uppercase tracking-[1.2px] text-slate-400">{label}</Text>
      <View className="flex-row items-center rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
        <Ionicons name={icon} size={18} color="#64748b" />
        <TextInput
          value={value}
          editable={editable}
          onChangeText={onChangeText}
          className="ml-3 flex-1 text-base text-slate-800"
          placeholderTextColor="#94a3b8"
        />
      </View>
    </View>
  );
}

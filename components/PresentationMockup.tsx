import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export default function PresentationMockup() {
  return (
    <View style={{ width: '100%', alignItems: 'center', paddingVertical: 20 }}>
      <View
        style={{
          width: 340,
          borderRadius: 32,
          backgroundColor: '#ffffff',
          shadowColor: '#0f172a',
          shadowOpacity: 0.12,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: 12 },
          padding: 18,
          borderWidth: 1,
          borderColor: '#e2e8f0',
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, fontWeight: '700', color: '#0f172a' }}>UrbaCargo</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Text style={{ fontSize: 10, color: '#64748b' }}>Eco</Text>
            <View style={{ width: 8, height: 8, borderRadius: 999, backgroundColor: '#059669' }} />
          </View>
        </View>

        <View style={{ marginTop: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 11, color: '#64748b' }}>Buenos días,</Text>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#0f172a' }}>Valentina</Text>
          </View>
          <View style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: '#dcfce7', alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="person-circle-outline" size={24} color="#047857" />
          </View>
        </View>

        <View style={{ marginTop: 18, borderRadius: 22, backgroundColor: '#0f9f6e', padding: 18 }}>
          <Text style={{ fontSize: 12, color: '#d1fae5', fontWeight: '700' }}>Ruta sostenible</Text>
          <Text style={{ marginTop: 6, fontSize: 24, fontWeight: '900', color: '#ffffff' }}>Bienvenido</Text>
          <Text style={{ marginTop: 6, fontSize: 12, color: '#dcfce7' }}>Tu entrega segura y rápida</Text>
        </View>

        <View style={{ marginTop: 18, borderRadius: 18, backgroundColor: '#f8fafc', padding: 14 }}>
          <Text style={{ fontSize: 12, color: '#64748b' }}>Envío activo</Text>
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 14, fontWeight: '800', color: '#0f172a' }}>UC-2026-482</Text>
              <Text style={{ fontSize: 11, color: '#64748b' }}>Calle 15 → Riohacha</Text>
            </View>
            <View style={{ backgroundColor: '#fef3c7', borderRadius: 999, paddingHorizontal: 8, paddingVertical: 4 }}>
              <Text style={{ fontSize: 10, fontWeight: '800', color: '#b45309' }}>EN CAMINO</Text>
            </View>
          </View>
        </View>

        <Pressable style={{ marginTop: 18, borderRadius: 16, backgroundColor: '#0f172a', paddingVertical: 14, alignItems: 'center' }}>
          <Text style={{ color: '#ffffff', fontWeight: '800' }}>Crear nuevo envío</Text>
        </Pressable>
      </View>
    </View>
  );
}

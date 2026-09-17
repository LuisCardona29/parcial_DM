import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export function BrandMark({ size = 'normal' }: { size?: 'normal' | 'large' }) {
  const isLarge = size === 'large';

  return (
    <View
      style={{
        width: isLarge ? 80 : 44,
        height: isLarge ? 80 : 44,
        borderRadius: isLarge ? 26 : 16,
        backgroundColor: '#0f9f6e',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0f9f6e',
        shadowOpacity: 0.35,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
      }}
    >
      <View
        style={{
          width: isLarge ? 46 : 26,
          height: isLarge ? 46 : 26,
          borderRadius: isLarge ? 23 : 13,
          backgroundColor: 'rgba(255,255,255,0.18)',
          position: 'absolute',
        }}
      />
      <Ionicons name="bicycle" size={isLarge ? 34 : 20} color="white" />
    </View>
  );
}

export function BrandWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <BrandMark size={compact ? 'normal' : 'large'} />
      <Text style={{ marginLeft: compact ? 8 : 12, fontSize: compact ? 18 : 28, fontWeight: '900', color: '#0f172a' }}>
        UrbaCargo
      </Text>
    </View>
  );
}

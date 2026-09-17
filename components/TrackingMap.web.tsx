import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default function TrackingMap({ progress }: { progress: number }) {
  const ratio = Math.min(1, Math.max(0, progress / 100));
  const pickup = { x: 18, y: 74 };
  const destination = { x: 82, y: 26 };
  const courier = {
    x: pickup.x + (destination.x - pickup.x) * ratio,
    y: pickup.y + (destination.y - pickup.y) * ratio,
  };

  const dx = destination.x - pickup.x;
  const dy = destination.y - pickup.y;
  const routeAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const routeLength = Math.hypot(dx, dy) * 1.4;

  return (
    <View style={{ height: 210, width: '100%', overflow: 'hidden', backgroundColor: '#dfe7ee' }}>
      <View style={{ position: 'absolute', inset: 0, backgroundColor: '#dfe7ee' }} />

      <View style={{ position: 'absolute', left: '10%', top: '16%', width: '28%', height: '58%', borderRadius: 26, backgroundColor: '#f1f5f9' }} />
      <View style={{ position: 'absolute', right: '11%', top: '13%', width: '24%', height: '54%', borderRadius: 22, backgroundColor: '#f8fafc' }} />
      <View style={{ position: 'absolute', left: '23%', top: 0, width: 4, height: '100%', borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.8)' }} />
      <View style={{ position: 'absolute', left: '49%', top: 0, width: 4, height: '100%', borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.7)' }} />
      <View style={{ position: 'absolute', left: '69%', top: 0, width: 4, height: '100%', borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.75)' }} />
      <View style={{ position: 'absolute', left: 0, top: '36%', width: '100%', height: 4, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.75)' }} />
      <View style={{ position: 'absolute', left: 0, top: '62%', width: '100%', height: 4, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.72)' }} />
      <View style={{ position: 'absolute', left: '36%', top: 0, width: 3, height: '100%', borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.6)' }} />

      <View
        style={{
          position: 'absolute',
          left: `${pickup.x}%`,
          top: `${pickup.y}%`,
          width: `${routeLength}%`,
          height: 5,
          borderRadius: 999,
          backgroundColor: '#059669',
          transform: [{ translateX: -10 }, { translateY: -2 }, { rotate: `${routeAngle}deg` }],
          opacity: 0.95,
        }}
      />

      <View style={{ position: 'absolute', left: `${pickup.x}%`, top: `${pickup.y}%`, transform: [{ translateX: -12 }, { translateY: -12 }] }}>
        <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="location" size={12} color="white" />
        </View>
      </View>

      <View style={{ position: 'absolute', left: `${destination.x}%`, top: `${destination.y}%`, transform: [{ translateX: -12 }, { translateY: -12 }] }}>
        <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#059669', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="flag" size={12} color="white" />
        </View>
      </View>

      <View style={{ position: 'absolute', left: `${courier.x}%`, top: `${courier.y}%`, transform: [{ translateX: -16 }, { translateY: -16 }] }}>
        <View style={{ width: 32, height: 32, borderRadius: 18, borderWidth: 2, borderColor: 'white', backgroundColor: '#059669', alignItems: 'center', justifyContent: 'center', elevation: 4, shadowColor: '#000', shadowOpacity: 0.18, shadowRadius: 4, shadowOffset: { width: 0, height: 2 } }}>
          <Ionicons name="bicycle" size={16} color="white" />
        </View>
      </View>

      <View style={{ position: 'absolute', left: 12, bottom: 12, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 }}>
        <Text style={{ fontSize: 10, fontWeight: '700', color: '#334155' }}>Riohacha · GPS simulado</Text>
      </View>
    </View>
  );
}

// ČAS 03 · POČETAK (grana cas-03-start)
// Tri kartice napisane copy-paste. Namerno loše!
// Pitanje za studente: "Bumbar Labs hoće zaobljenije ivice. Koliko mesta menjam?"
import { ScrollView, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 12 }}>
        <Text style={{ fontSize: 40 }}>🍕</Text>
        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 8 }}>Pica Margarita</Text>
        <Text style={{ color: '#6B6185', marginTop: 4 }}>890 RSD · 25 min</Text>
      </View>

      <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 12 }}>
        <Text style={{ fontSize: 40 }}>🥙</Text>
        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 8 }}>Ćevapi u lepinji</Text>
        <Text style={{ color: '#6B6185', marginTop: 4 }}>750 RSD · 30 min</Text>
      </View>

      <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 12 }}>
        <Text style={{ fontSize: 40 }}>🥞</Text>
        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 8 }}>Palačinke</Text>
        <Text style={{ color: '#6B6185', marginTop: 4 }}>420 RSD · 15 min</Text>
      </View>
    </ScrollView>
  );
}

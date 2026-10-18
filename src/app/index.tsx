// ČAS 03 · REŠENJE (grana cas-03-solution)
// HomeScreen samo NARUČUJE. Kako kartica izgleda, zna recept FoodCard.
import { ScrollView } from 'react-native';
import { FoodCard } from '@/components/FoodCard';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <FoodCard emoji="🍕" name="Pica Margarita" price={890} time="25 min" />
      <FoodCard emoji="🥙" name="Ćevapi u lepinji" price={750} time="30 min" />
      <FoodCard emoji="🥞" name="Palačinke" price={420} time="15 min" />
    </ScrollView>
  );
}

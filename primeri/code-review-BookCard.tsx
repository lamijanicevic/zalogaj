// CODE REVIEW ARENA (čas 04) · Nađi dve greške. Kod se kritikuje, ljudi ne.
import { View, Text, Pressable } from 'react-native';

export function BookCard({ title }: { title: string }) {
  let read = false;
  return (
    <View>
      {title}
      <Pressable onPress={() => (read = true)}>
        <Text>{read ? 'Pročitano' : 'Označi'}</Text>
      </Pressable>
    </View>
  );
}

/* REŠENJE
 1. {title} stoji direktno u View → crveni ekran. Popravka: <Text>{title}</Text>
 2. `let read` nije tabla → klik ne menja ekran. Popravka:
      const [read, setRead] = useState(false);
      onPress={() => setRead(true)}
 Primer PR komentara: "Naslov umotaj u Text, a read prebaci u useState,
 inače se klik ne vidi na ekranu."
*/

// PREDICT P3 · Kliknem srce 3 puta. Šta je na ekranu, a šta u konzoli?
// Ekran: uvek 🤍.  Konzola: true, false, true.
// Dva razloga: (1) React ne zna da treba novi tanjir (re-render);
// (2) i kad bi crtao, `let liked = false` bi krenulo ispočetka.
import { Pressable, Text } from 'react-native';

export default function P3() {
  let liked = false; // ✗ obična promenljiva, nije tabla

  return (
    <Pressable
      onPress={() => {
        liked = !liked;
        console.log(liked);
      }}
    >
      <Text style={{ fontSize: 40 }}>{liked ? '❤️' : '🤍'}</Text>
    </Pressable>
  );
}

// Popravka (tabla u kuhinji):
// const [liked, setLiked] = useState(false);
// onPress={() => setLiked(!liked)}

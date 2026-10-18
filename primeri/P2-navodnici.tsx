// PREDICT P2 · Šta piše na kartici?
// A) 990  B) 890100  C) greška  D) ne znam
// Sa tipom: editor odmah podvuče price="890" (price mora biti number).
// Bez tipa: na ekranu piše 890100 — "890" je TEKST, a tekst + broj = lepljenje.
// "Navodnici šalju tekst. Vitičaste zagrade šalju pravu vrednost."
import { Text } from 'react-native';

function Cena({ price }: { price: any }) {
  return <Text>{price + 100} RSD</Text>;
}

export default function P2() {
  return <Cena price="890" />;   // ✗ 890100 RSD
  // return <Cena price={890} />; // ✓ 990 RSD
}

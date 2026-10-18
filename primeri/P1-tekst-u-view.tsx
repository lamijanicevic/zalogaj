// PREDICT P1 · Šta se desi na telefonu?
// A) prikaže "Zdravo"  B) ništa  C) greška  D) ne znam
// Odgovor: C — "Text strings must be rendered within a <Text> component."
// Na webu div sme da ima tekst; u React Native-u View je samo kutija.
import { View } from 'react-native';

export default function P1() {
  return <View>Zdravo</View>;
}

// Popravka:
// return <View><Text>Zdravo</Text></View>;

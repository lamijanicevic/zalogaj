// PLANIRANA GREŠKA · "Too many re-renders"
// onPress={setQty(qty + 1)} poziva funkciju ODMAH, tokom crtanja.
// Crtanje menja tablu → novo crtanje → opet poziv → ... u krug.
// "Zvoniš dok kuvaš, a ne kad gost pozvoni."
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

export default function ZvonoGreska() {
  const [qty, setQty] = useState(0);

  return (
    <Pressable onPress={setQty(qty + 1)}>{/* ✗ zove odmah */}
      <Text>U korpi: {qty}</Text>
    </Pressable>
  );
}

// Popravka: strelica = poruka za kasnije
// <Pressable onPress={() => setQty(qty + 1)}>

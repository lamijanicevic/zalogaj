// 📖 RECEPT (komponenta): pišemo ga jednom, naručujemo koliko hoćemo.
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, spacing } from '@/constants/theme';

// 🧾 NARUDŽBINA (props): šta HomeScreen šalje kuhinji.
// Tip je konobar koji proveri narudžbinu pre nego što ode u kuhinju.
type FoodCardProps = {
  emoji: string; // slika jela
  name: string;  // naziv jela
  price: number; // cena u RSD (broj, ne tekst!)
  time: string;  // vreme dostave
};

export function FoodCard({ emoji, name, price, time }: FoodCardProps) {
  // 🖊️ TABLA (state): svaka porcija ima svoju tablu.
  const [liked, setLiked] = useState(false);
  const [qty, setQty] = useState(0);

  return (
    // Niz stilova: uvek card, a liked samo ako je liked === true.
    <View style={[styles.card, liked && styles.liked]}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{emoji}</Text>
        {/* 🔔 ZVONO (event): strelica = poruka za kasnije, izvrši se tek na klik */}
        <Pressable onPress={() => setLiked(!liked)} hitSlop={12}>
          <Text style={styles.heart}>{liked ? '❤️' : '🤍'}</Text>
        </Pressable>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.meta}>
        {price} RSD · {time}
      </Text>

      <Pressable
        style={[styles.button, qty > 0 && styles.buttonActive]}
        onPress={() => setQty(qty + 1)}
      >
        <Text style={styles.buttonText}>
          {qty === 0 ? 'Dodaj u korpu' : `U korpi: ${qty}`}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12, // ← tajni zahtev Bumbar Labs: promeni na 20
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  liked: { borderColor: colors.liked },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  emoji: { fontSize: 40 },
  heart: { fontSize: 26 },
  name: { fontSize: 18, fontWeight: '600', color: colors.text, marginTop: spacing.sm },
  meta: { color: colors.muted, marginTop: 4 },
  button: {
    marginTop: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonActive: { backgroundColor: '#2F7A3B' },
  buttonText: { color: '#FFFFFF', fontWeight: '600' },
});

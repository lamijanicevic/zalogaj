// ČAS 04 · PRIMER ZA SPRINT (FitStart): isti obrazac kao FoodCard, drugi proizvod.
// Bronza: recept + narudžbine · Srebro: tabla + zvono · Zlato: izgled zavisi od table.
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, spacing } from '@/constants/theme';

type WorkoutCardProps = {
  name: string;    // naziv treninga
  minutes: number; // trajanje
  level: 'lako' | 'srednje' | 'teško';
};

export function WorkoutCard({ name, minutes, level }: WorkoutCardProps) {
  const [done, setDone] = useState(false); // 🖊️ tabla

  return (
    // 🥇 Zlato: stil zavisi od table
    <View style={[styles.card, done && styles.cardDone]}>
      <Text style={[styles.name, done && styles.nameDone]}>{name}</Text>
      <Text style={styles.meta}>
        {minutes} min · {level}
      </Text>
      {/* 🔔 zvono */}
      <Pressable style={[styles.button, done && styles.buttonDone]} onPress={() => setDone(!done)}>
        <Text style={styles.buttonText}>{done ? '✓ Završeno' : 'Označi kao završeno'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.lg, marginBottom: spacing.md },
  cardDone: { backgroundColor: '#E7F6EA' },
  name: { fontSize: 18, fontWeight: '600', color: colors.text },
  nameDone: { textDecorationLine: 'line-through', color: colors.muted },
  meta: { color: colors.muted, marginTop: 4 },
  button: { marginTop: spacing.md, backgroundColor: colors.primary, borderRadius: 8, padding: 10, alignItems: 'center' },
  buttonDone: { backgroundColor: '#2F7A3B' },
  buttonText: { color: '#FFFFFF', fontWeight: '600' },
});

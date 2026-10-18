// ČAS 04 · PRIMER (grana cas-04-primer): FitStart sa karticom treninga.
import { ScrollView } from 'react-native';
import { WorkoutCard } from '@/components/WorkoutCard';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <WorkoutCard name="Full body" minutes={30} level="srednje" />
      <WorkoutCard name="Jutarnje istezanje" minutes={10} level="lako" />
      <WorkoutCard name="HIIT kardio" minutes={20} level="teško" />
    </ScrollView>
  );
}

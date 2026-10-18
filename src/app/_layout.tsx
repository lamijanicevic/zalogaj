import { Stack } from 'expo-router';
import { colors } from '@/constants/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: 'Zalogaj',
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { fontWeight: '700', color: colors.text },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}

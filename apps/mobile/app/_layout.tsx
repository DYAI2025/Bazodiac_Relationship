import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '../src/ui/ThemeProvider';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerBackTitle: 'Zurück', headerShadowVisible: false }}>
        <Stack.Screen name="index" options={{ title: 'Bazodiac Relationship' }} />
        <Stack.Screen name="relationship" options={{ title: 'Beziehungsdynamiken' }} />
        <Stack.Screen name="dynamic/[id]" options={{ title: 'Dynamik' }} />
        <Stack.Screen name="settings" options={{ title: 'Einstellungen' }} />
      </Stack>
    </ThemeProvider>
  );
}

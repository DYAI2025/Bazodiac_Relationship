import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { Screen } from '../src/ui/Screen';
import { Notice } from '../src/ui/Notice';
import { styles } from '../src/ui/styles';

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.stack}>
        <Text accessibilityRole="header" style={styles.eyebrow}>CHANCE & SHADOW</Text>
        <Text style={styles.title}>Versteht, was zwischen euch entstehen kann.</Text>
        <Text style={styles.body}>Keine Kompatibilitätszahl. Keine Diagnose. Jede sichtbare Dynamik bleibt auf Evidenz und eine freigegebene Regel zurückführbar.</Text>
        <Notice kind="demo" title="Demo-Daten">Diese Foundation zeigt noch keine echte astrologische Berechnung.</Notice>
        <Link href="/relationship" style={styles.primaryLink} accessibilityRole="button">Demo-Dossier öffnen</Link>
        <Link href="/settings" style={styles.secondaryLink} accessibilityRole="button">Datenschutz und Einstellungen</Link>
      </ScrollView>
    </Screen>
  );
}

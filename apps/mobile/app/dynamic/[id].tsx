import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { demoDossier } from '../../src/demo/demoDossier';
import { Screen } from '../../src/ui/Screen';
import { Notice } from '../../src/ui/Notice';
import { styles } from '../../src/ui/styles';

export default function DynamicDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const dynamic = demoDossier.relationshipDynamics.find((item) => item.dynamicId === id);
  if (!dynamic) return <Screen><Notice kind="error" title="Nicht gefunden">Die angeforderte Dynamik ist nicht verfügbar.</Notice></Screen>;
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.stack}>
        <Text accessibilityRole="header" style={styles.title}>{dynamic.title}</Text>
        <Text style={styles.body}>{dynamic.neutralMechanism.description}</Text>
        <View style={styles.polarityGrid}>
          <View style={styles.polarityCard}><Text style={styles.cardLabel}>SCHATTEN</Text><Text style={styles.body}>{dynamic.shadow.description}</Text></View>
          <View style={styles.polarityCard}><Text style={styles.cardLabel}>CHANCE</Text><Text style={styles.body}>{dynamic.chance.description}</Text></View>
        </View>
        <Notice kind="info" title="Keine Positionsaussage">Das System leitet nicht ab, auf welcher Seite dieser Achse ihr aktuell steht.</Notice>
        <Text style={styles.sectionTitle}>Evidenz</Text>
        {dynamic.supportingEvidence.map((evidenceId) => <Text key={evidenceId} style={styles.mono}>{evidenceId}</Text>)}
        <Text style={styles.sectionTitle}>Gegenindikatoren</Text>
        {dynamic.counterEvidence.map((evidenceId) => <Text key={evidenceId} style={styles.mono}>{evidenceId}</Text>)}
      </ScrollView>
    </Screen>
  );
}

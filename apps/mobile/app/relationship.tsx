import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { demoDossier } from '../src/demo/demoDossier';
import { DynamicCard } from '../src/features/dynamics/DynamicCard';
import { Screen } from '../src/ui/Screen';
import { Notice } from '../src/ui/Notice';
import { styles } from '../src/ui/styles';

export default function RelationshipScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.stack}>
        <Text accessibilityRole="header" style={styles.title}>Eure Dynamiken</Text>
        <Notice kind="demo" title="DEMO_DATA">Nicht berechnet. Vertrag und UI-Zustände werden exemplarisch gezeigt.</Notice>
        {demoDossier.relationshipDynamics.map((dynamic) => (
          <Link key={dynamic.dynamicId} href={{ pathname: '/dynamic/[id]', params: { id: dynamic.dynamicId } }} asChild>
            <DynamicCard dynamic={dynamic} />
          </Link>
        ))}
      </ScrollView>
    </Screen>
  );
}

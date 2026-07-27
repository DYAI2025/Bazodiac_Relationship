import { ScrollView, Text } from 'react-native';
import { Screen } from '../src/ui/Screen';
import { Notice } from '../src/ui/Notice';
import { styles } from '../src/ui/styles';

export default function SettingsScreen() {
  return <Screen><ScrollView contentContainerStyle={styles.stack}>
    <Text accessibilityRole="header" style={styles.title}>Datenschutz</Text>
    <Notice kind="info" title="Client-Grenze">Die Mobile App spricht ausschließlich mit dem Relationship-BFF. FuFirE-Schlüssel gehören nie in die App.</Notice>
    <Text style={styles.body}>Produktive Sessions werden über einen Secure-Storage-Port gespeichert. Dieses Boilerplate enthält absichtlich nur einen Demo-Adapter und keine echte Authentifizierung.</Text>
  </ScrollView></Screen>;
}

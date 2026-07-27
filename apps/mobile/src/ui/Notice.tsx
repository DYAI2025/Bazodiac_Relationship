import { Text, View } from 'react-native';
import type { ReactNode } from 'react';
import { styles } from './styles';

export function Notice({ title, children, kind }: { title: string; children: ReactNode; kind: 'demo' | 'info' | 'error' }) {
  return <View style={styles.notice} accessibilityRole={kind === 'error' ? 'alert' : 'summary'}>
    <Text style={styles.cardLabel}>{title}</Text>
    <Text style={styles.body}>{children}</Text>
  </View>;
}

import { SafeAreaView } from 'react-native-safe-area-context';
import type { ReactNode } from 'react';
import { styles } from './styles';

export function Screen({ children }: { children: ReactNode }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

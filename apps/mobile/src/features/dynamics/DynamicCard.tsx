import { forwardRef } from 'react';
import { Pressable, Text, View, type PressableProps } from 'react-native';
import type { RelationshipDynamic } from '../../domain/types';
import { styles } from '../../ui/styles';

export const DynamicCard = forwardRef<View, PressableProps & { dynamic: RelationshipDynamic }>(function DynamicCard({ dynamic, ...props }, ref) {
  return <Pressable ref={ref} {...props} style={styles.dynamicCard} accessibilityRole="button" accessibilityLabel={`${dynamic.title}. Details öffnen`}>
    <Text style={styles.cardLabel}>{dynamic.domain.toUpperCase()}</Text>
    <Text style={styles.cardTitle}>{dynamic.title}</Text>
    <Text style={styles.body}>{dynamic.neutralMechanism.description}</Text>
    <View style={styles.row}>
      <Text style={styles.pill}>Schatten</Text>
      <Text style={styles.axis}>← Kerndynamik →</Text>
      <Text style={styles.pill}>Chance</Text>
    </View>
  </Pressable>;
});

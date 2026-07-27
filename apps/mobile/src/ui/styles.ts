import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FCF8F2' },
  stack: { padding: 24, gap: 18 },
  eyebrow: { fontSize: 12, letterSpacing: 2, color: '#A85F4A', fontWeight: '700' },
  title: { fontSize: 34, lineHeight: 40, color: '#292624', fontWeight: '700' },
  sectionTitle: { fontSize: 20, lineHeight: 26, color: '#292624', fontWeight: '700', marginTop: 8 },
  body: { fontSize: 17, lineHeight: 25, color: '#292624' },
  primaryLink: { backgroundColor: '#18314F', color: '#fff', padding: 16, borderRadius: 12, textAlign: 'center', fontSize: 17, fontWeight: '700', minHeight: 52 },
  secondaryLink: { borderWidth: 1, borderColor: '#18314F', color: '#18314F', padding: 16, borderRadius: 12, textAlign: 'center', fontSize: 17, minHeight: 52 },
  notice: { padding: 16, borderWidth: 1, borderColor: '#D9D0C4', borderRadius: 12, backgroundColor: '#fff', gap: 6 },
  cardLabel: { fontSize: 12, letterSpacing: 1.2, fontWeight: '700', color: '#625C58' },
  dynamicCard: { padding: 20, borderWidth: 1, borderColor: '#D9D0C4', borderRadius: 16, backgroundColor: '#fff', gap: 12, minHeight: 180 },
  cardTitle: { fontSize: 24, lineHeight: 30, fontWeight: '700', color: '#292624' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' },
  pill: { paddingHorizontal: 10, paddingVertical: 6, borderWidth: 1, borderColor: '#625C58', borderRadius: 999, color: '#292624' },
  axis: { color: '#625C58', fontSize: 13 },
  polarityGrid: { gap: 12 },
  polarityCard: { padding: 18, borderLeftWidth: 4, borderLeftColor: '#18314F', backgroundColor: '#fff', borderRadius: 12, gap: 8 },
  mono: { fontFamily: 'monospace', fontSize: 13, color: '#18314F' }
});

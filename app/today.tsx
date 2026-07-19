import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import GlassCard from '../components/GlassCard';
import GlossyButton from '../components/GlossyButton';
import { colors, gradients, fonts, spacing, radii } from '../theme/clementine';
import { city, morning, evening, microDelights } from '../data/mock';

export default function Today() {
  const delight = microDelights[0];
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <LinearGradient colors={gradients.hero} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
          <View style={styles.sheen} pointerEvents="none" />
          <Text style={styles.spark}>✦</Text>
        </LinearGradient>

        <View style={styles.pad}>
          <Text style={styles.label}>{city.name} · Good morning</Text>

          <View style={styles.envRow}>
            <Env value={String(city.uv)} label="UV" />
            <Env value={`${city.humidity}%`} label="Humidity" />
            <Env value={String(city.aqi)} label="AQI" />
          </View>

          {/* Living expert (peak) */}
          <GlassCard style={{ marginBottom: spacing.sm }}>
            <Text style={styles.who}>Your expert</Text>
            <Text style={styles.expert}>
              Good morning. I am keeping pigmentation front of mind, so today leans into protection.
            </Text>
          </GlassCard>

          {/* Micro-delight (peak) */}
          <View style={styles.delight}>
            <Text style={styles.delightText}>💜  {delight}</Text>
          </View>

          <Text style={styles.h2}>Today's ritual</Text>
          <Text style={styles.note}>A bright, thirsty day. Protect, and keep it light.</Text>

          <Section title="🌅 This morning" items={morning} />
          <Section title="🌙 Tonight" items={evening} />

          <Text style={styles.accent}>nothing to buy today</Text>

          <GlossyButton label="Ask your expert" variant="ghost" style={{ marginTop: spacing.md }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Env({ value, label }: { value: string; label: string }) {
  return (
    <GlassCard style={styles.env}>
      <Text style={styles.envValue}>{value}</Text>
      <Text style={styles.envLabel}>{label}</Text>
    </GlassCard>
  );
}

function Section({ title, items }: { title: string; items: { name: string; tag: string }[] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((it, i) => (
        <View key={i} style={[styles.step, i === 0 && { borderTopWidth: 0 }]}>
          <Text style={styles.stepName}>{it.name}</Text>
          <Text style={styles.stepTag}>{it.tag}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },
  hero: { height: 120, justifyContent: 'center' },
  sheen: { position: 'absolute', top: 0, left: 0, width: '60%', height: '100%', backgroundColor: 'rgba(255,255,255,0.18)', transform: [{ skewX: '-12deg' }] },
  spark: { position: 'absolute', top: 22, right: 40, color: '#fff', fontSize: 13 },
  pad: { paddingHorizontal: spacing.lg, marginTop: spacing.md },
  label: { fontFamily: fonts.label, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: colors.faint },
  envRow: { flexDirection: 'row', gap: 8, marginVertical: 12 },
  env: { flex: 1, alignItems: 'center' },
  envValue: { fontFamily: fonts.display, fontSize: 22, color: colors.ember },
  envLabel: { fontFamily: fonts.label, fontSize: 8, letterSpacing: 1.5, textTransform: 'uppercase', color: colors.faint, marginTop: 4 },
  who: { fontFamily: fonts.label, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: colors.faint, marginBottom: 4 },
  expert: { fontFamily: fonts.body, fontSize: 14, color: colors.ink, lineHeight: 20 },
  delight: { backgroundColor: '#F7EEF5', borderRadius: radii.md, padding: 12, marginBottom: spacing.md, borderWidth: 1, borderColor: '#ecd8ea' },
  delightText: { fontFamily: fonts.body, fontSize: 13, color: '#6a4f66', lineHeight: 19 },
  h2: { fontFamily: fonts.display, fontSize: 28, color: colors.ink },
  note: { fontFamily: fonts.displayItalic, fontSize: 15, color: colors.sub, marginBottom: 6 },
  section: { marginTop: 12, backgroundColor: colors.white, borderRadius: radii.md, borderWidth: 1, borderColor: colors.line, padding: 14 },
  sectionTitle: { fontFamily: fonts.bodyMed, fontSize: 14, color: '#5a4034', marginBottom: 6 },
  step: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', paddingVertical: 8, borderTopWidth: 1, borderTopColor: colors.line },
  stepName: { fontFamily: fonts.body, fontSize: 14.5, color: '#3a2c24' },
  stepTag: { fontFamily: fonts.label, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: colors.faint },
  accent: { fontFamily: fonts.accent, fontSize: 22, color: colors.ember, marginTop: 12 },
});

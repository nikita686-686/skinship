import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GlossyButton from '../components/GlossyButton';
import GlassCard from '../components/GlassCard';
import { colors, fonts, spacing, radii } from '../theme/clementine';
import { personas, tones } from '../data/mock';

export default function Onboarding() {
  const router = useRouter();
  const [persona, setPersona] = useState('friend');
  const [tone, setTone] = useState('warm');

  const current = personas.find((p) => p.id === persona)!;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: 40 }}>
        <Text style={styles.label}>Skinship</Text>
        <Text style={styles.h1}>Design your expert</Text>
        <Text style={styles.note}>Pick who guides you. You can change this any time.</Text>

        <View style={{ height: spacing.md }} />
        {personas.map((p) => {
          const sel = p.id === persona;
          return (
            <Pressable key={p.id} onPress={() => setPersona(p.id)} style={[styles.choice, sel && styles.choiceSel]}>
              <Text style={styles.emoji}>{p.emoji}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.choiceTitle}>{p.label}</Text>
                <Text style={styles.choiceDesc}>{p.desc}</Text>
              </View>
            </Pressable>
          );
        })}

        <Text style={[styles.label, { marginTop: spacing.lg }]}>And the tone</Text>
        <View style={styles.chips}>
          {tones.map((t) => {
            const sel = t.id === tone;
            return (
              <Pressable key={t.id} onPress={() => setTone(t.id)} style={[styles.chip, sel && styles.chipSel]}>
                <Text style={[styles.chipLabel, sel && { color: colors.white }]}>{t.label}</Text>
              </Pressable>
            );
          })}
        </View>

        <GlassCard style={{ marginTop: spacing.lg }}>
          <Text style={styles.previewWho}>Preview</Text>
          <Text style={styles.previewText}>
            {current.emoji}  {tone === 'clinical' ? 'Morning. ' : tone === 'casual' ? 'Hey! ' : 'Good morning, lovely. '}
            I am your skin expert. Here is your one clear thing to do today.
          </Text>
        </GlassCard>

        <GlossyButton label="Continue" style={{ marginTop: spacing.lg }} onPress={() => router.push('/today')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.mist },
  label: { fontFamily: fonts.label, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: colors.faint },
  h1: { fontFamily: fonts.display, fontSize: 32, color: colors.ink, marginTop: 4 },
  note: { fontFamily: fonts.displayItalic, fontSize: 15, color: colors.sub, marginTop: 2 },
  choice: {
    flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: colors.white,
    borderRadius: radii.md, padding: 13, marginBottom: 10, borderWidth: 1.5, borderColor: colors.line,
  },
  choiceSel: { borderColor: colors.tangerine, backgroundColor: '#FFF3EC' },
  emoji: { fontSize: 22 },
  choiceTitle: { fontFamily: fonts.bodyMed, fontSize: 15, color: colors.ink },
  choiceDesc: { fontFamily: fonts.body, fontSize: 12.5, color: colors.sub },
  chips: { flexDirection: 'row', gap: 8, marginTop: 10 },
  chip: { borderRadius: radii.pill, paddingVertical: 9, paddingHorizontal: 16, borderWidth: 1.5, borderColor: colors.line, backgroundColor: colors.white },
  chipSel: { backgroundColor: colors.tangerine, borderColor: colors.tangerine },
  chipLabel: { fontFamily: fonts.body, fontSize: 14, color: colors.ink },
  previewWho: { fontFamily: fonts.label, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: colors.faint, marginBottom: 4 },
  previewText: { fontFamily: fonts.body, fontSize: 14, color: colors.ink, lineHeight: 20 },
});

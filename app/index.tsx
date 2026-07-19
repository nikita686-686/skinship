import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import GlossyButton from '../components/GlossyButton';
import { colors, gradients, fonts, spacing } from '../theme/clementine';

export default function Welcome() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <LinearGradient colors={gradients.hero} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
        <View style={styles.sheen} pointerEvents="none" />
        <Text style={styles.brand}>S K I N S H I P</Text>
        <Text style={styles.spark}>✦</Text>
        <Text style={styles.spark2}>✦</Text>
      </LinearGradient>

      <View style={styles.body}>
        <Text style={styles.h1}>Your daily{'\n'}skin ritual</Text>
        <Text style={styles.note}>Considered. Never sold to.</Text>
        <GlossyButton label="Begin" style={{ marginTop: spacing.xl }} onPress={() => router.push('/onboarding')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },
  hero: { height: 380, alignItems: 'center', justifyContent: 'center' },
  sheen: { position: 'absolute', top: 0, left: 0, width: '65%', height: '100%', backgroundColor: 'rgba(255,255,255,0.16)', transform: [{ skewX: '-12deg' }] },
  brand: { position: 'absolute', top: 60, color: colors.white, fontFamily: fonts.label, fontSize: 14, letterSpacing: 7 },
  spark: { position: 'absolute', top: 110, right: 54, color: '#fff', fontSize: 16 },
  spark2: { position: 'absolute', top: 160, left: 60, color: '#fff', fontSize: 10 },
  body: { flex: 1, justifyContent: 'center', paddingHorizontal: spacing.lg },
  h1: { fontFamily: fonts.display, fontSize: 40, lineHeight: 44, color: colors.ink },
  note: { fontFamily: fonts.displayItalic, fontSize: 17, color: colors.sub, marginTop: spacing.sm },
});

import React from 'react';
import { Pressable, Text, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients, radii, fonts, shadow } from '../theme/clementine';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: 'solid' | 'ghost';
  style?: ViewStyle;
};

export default function GlossyButton({ label, onPress, variant = 'solid', style }: Props) {
  if (variant === 'ghost') {
    return (
      <Pressable onPress={onPress} style={[styles.ghost, style]}>
        <Text style={styles.ghostLabel}>{label}</Text>
      </Pressable>
    );
  }
  return (
    <Pressable onPress={onPress} style={[shadow.button, style]}>
      <LinearGradient colors={gradients.button} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.btn}>
        {/* top highlight sheen */}
        <View style={styles.sheen} pointerEvents="none" />
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { borderRadius: radii.pill, paddingVertical: 15, alignItems: 'center', overflow: 'hidden' },
  sheen: { position: 'absolute', top: 0, left: 0, right: 0, height: '46%', backgroundColor: 'rgba(255,255,255,0.35)' },
  label: { color: colors.white, fontFamily: fonts.bodyMed, fontSize: 12, letterSpacing: 3, textTransform: 'uppercase' },
  ghost: {
    borderRadius: radii.pill, paddingVertical: 15, alignItems: 'center',
    backgroundColor: 'rgba(255,240,232,0.7)', borderWidth: 1, borderColor: colors.glassBorder,
  },
  ghostLabel: { color: colors.ember, fontFamily: fonts.bodyMed, fontSize: 12, letterSpacing: 3, textTransform: 'uppercase' },
});

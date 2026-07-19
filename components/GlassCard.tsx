import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radii, shadow } from '../theme/clementine';

export default function GlassCard({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return (
    <View style={[shadow.glass, styles.wrap, style]}>
      <LinearGradient
        colors={['rgba(255,255,255,0.86)', 'rgba(255,246,240,0.72)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.inner}
      >
        {children}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { borderRadius: radii.md, overflow: 'hidden', borderWidth: 1, borderColor: colors.glassBorder },
  inner: { padding: 15 },
});

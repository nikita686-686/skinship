import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Jost_300Light, Jost_400Regular, Jost_500Medium } from '@expo-google-fonts/jost';
import {
  CormorantGaramond_400Regular_Italic,
  CormorantGaramond_500Medium,
} from '@expo-google-fonts/cormorant-garamond';
import { Caveat_700Bold } from '@expo-google-fonts/caveat';
import { View } from 'react-native';
import { colors } from '../theme/clementine';

export default function RootLayout() {
  const [loaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    CormorantGaramond_500Medium,
    CormorantGaramond_400Regular_Italic,
    Caveat_700Bold,
  });

  if (!loaded) {
    return <View style={{ flex: 1, backgroundColor: colors.mist }} />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.white } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="today" />
      </Stack>
    </>
  );
}

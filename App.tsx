import 'react-native-gesture-handler';
import Routes from "./src/routes";
import React, { useCallback } from 'react';
import { useFonts, Outfit_600SemiBold, Outfit_700Bold, Outfit_400Regular, Outfit_500Medium } from '@expo-google-fonts/outfit';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  const [fontsLoaded, fontError] = useFonts({
    Outfit_600SemiBold,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

    if (!fontsLoaded) {
      return null
    } else {
      onLayoutRootView();
    }
  
  return (
    <Routes/>
  );
}

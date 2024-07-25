import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //custom hook
  // const [fontsLoaded] = useFonts({
  //   DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  //   DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  //   DMBold: require("../assets/fonts/DMSans-Regular.ttf"),
  // })

  // const onLayoutRootView = useCallback(async ()=>{
  //   if(fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded])

  // if(!fontsLoaded) {
  //   return null
  // }
    
  return <Stack />
}

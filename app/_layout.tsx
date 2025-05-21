import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, useWindowDimensions, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./global.css";

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [fontsLoaded] = useFonts({
    Commissioner: require("../assets/fonts/Commissioner.ttf"),
  });

  if (!fontsLoaded) {
    return <View />; // or your splash screen
  }

  return (
    <GestureHandlerRootView >
      <View className="flex-1 font-sans bg-white">
        {isMobile ? (
          <Drawer
            screenOptions={{
              drawerPosition: "right",
              headerShown: false,
              drawerStyle: {
                backgroundColor: "#fff",
                width: 250,
              },
              drawerType: "slide", // enables slide-in effect
              overlayColor: "transparent",
            }}
            drawerContent={(props) => (
              <DrawerContentScrollView {...props}>
                <View className="px-4 py-6">
                  <Text className="text-xl font-bold mb-4">Menu</Text>
                  <DrawerItemList {...props} />
                </View>
              </DrawerContentScrollView>
            )}
          >
            <Drawer.Screen name="index" options={{ title: "Home" }} />
          </Drawer>
        ) : (
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        )}
      </View>
    </GestureHandlerRootView>
  );
}

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import JuboScreen from "./screens/JuboScreen";
import NewsScreen from "./screens/NewsScreen";

export type RootStackParamList = {
  Home: undefined;
  Jubo: undefined;
  News: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Hoem" }}
          />
          <Stack.Screen name="Jubo" component={JuboScreen} />
          <Stack.Screen name="News" component={NewsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

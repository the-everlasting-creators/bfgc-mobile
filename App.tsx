import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import JuboScreen from "./screens/JuboScreen";
import NewsScreen from "./screens/NewsScreen";

export type RootStackParamList = {
  Main: undefined;
  Jubo: undefined;
  News: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ title: "브리즈번 순복음 교회" }}
          />
          <Stack.Screen name="Jubo" component={JuboScreen} />
          <Stack.Screen name="News" component={NewsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

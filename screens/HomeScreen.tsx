import React from "react";
import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <>
      <Button title="Go to Jubo" onPress={() => navigation.navigate("Jubo")} />
      <Button title="Go to News" onPress={() => navigation.navigate("News")} />
    </>
  );
};

export default HomeScreen;

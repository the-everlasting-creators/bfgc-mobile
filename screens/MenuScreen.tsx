import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type MenuScreenProp = NativeStackNavigationProp<RootStackParamList, "Menu">;

const MenuScreen = () => {
  const navigation = useNavigation<MenuScreenProp>();
  return (
    <>
      <Button title="Go to Jubo" onPress={() => navigation.navigate("Jubo")} />
      <Button title="Go to News" onPress={() => navigation.navigate("News")} />
    </>
  );
};

export default MenuScreen;

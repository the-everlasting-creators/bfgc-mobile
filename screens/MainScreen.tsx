import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type MenuScreenProp = NativeStackNavigationProp<RootStackParamList, "Main">;

const MainScreen = () => {
  const navigation = useNavigation<MenuScreenProp>();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="주보" onPress={() => navigation.navigate("Jubo")} />
      </View>
      <View style={styles.button}>
        <Button title="교회소식" onPress={() => navigation.navigate("News")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    padding: 10,
  },
});

export default MainScreen;

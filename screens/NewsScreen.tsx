import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { data } from "../dummyData/news";

const NewsScreen = () => {
  console.log(data);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>교회소식</Text>
        {data.map((item) => {
          return (
            <View key={item.key} style={{ margin: 10 }}>
              <Text style={{ padding: 10 }}>{item.title}</Text>
              <Text>{item.content}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default NewsScreen;

import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const { moviesData } = useFetchData();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello World</Text>

      {moviesData.map((data) => {
        return <Text key={data.id}>{data.original_title}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

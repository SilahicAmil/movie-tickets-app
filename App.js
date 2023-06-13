import { Image, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const { moviesData } = useFetchData();

  console.log(moviesData[0]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {moviesData.map((data) => {
        return (
          <>
            <Text key={data.id}>{data.original_title}</Text>

            <Image
              style={styles.image}
              source={{
                uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
              }}
            />
          </>
        );
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
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

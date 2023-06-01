import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";

export default function App() {
  const [moviesData, setMoviesData] = useState([]);

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_AUTH,
    },
  };

  // put this into its own file
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url, options);

      const fullData = await data.json();

      setMoviesData(fullData.results);
    };
    getData();
  }, []);

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

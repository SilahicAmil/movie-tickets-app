import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import MoviesList from "./components/MoviesList/MoviesList";
import { StatusBar } from "expo-status-bar";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const { moviesData } = useFetchData();

  const renderMoviesListItems = (itemData) => {
    // navigate on press
    // pass props here
    return <MoviesList />;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {/* use FlatList here instead of map  */}
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
      </ScrollView>
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

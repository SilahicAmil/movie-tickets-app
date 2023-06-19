import { StyleSheet, View } from "react-native";

import MoviesList from "./components/MoviesList/MoviesList";
import { StatusBar } from "expo-status-bar";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const { moviesData } = useFetchData();

  const renderMoviesListItems = (itemData) => {
    // navigate on press

    return (
      <MoviesList
        imagePath={itemData.item.imagePath}
        title={itemData.item.original_title}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*  FlatList here   */}
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

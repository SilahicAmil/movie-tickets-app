import { FlatList, StyleSheet, View } from "react-native";

import MoviesList from "./components/MoviesList/MoviesList";
import { StatusBar } from "expo-status-bar";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const { moviesData } = useFetchData();
  console.log(moviesData[0]);

  const renderMoviesListItems = (itemData) => {
    // navigate on press

    return (
      <MoviesList
        imagePath={itemData.item.poster_path}
        title={itemData.item.original_title}
      />
    );
  };

  return (
    <View>
      <StatusBar style="auto" />
      <FlatList
        data={moviesData}
        renderItem={renderMoviesListItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

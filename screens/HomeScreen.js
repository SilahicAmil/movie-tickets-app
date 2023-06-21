import { FlatList, StyleSheet, Text, View } from "react-native/";

import MoviesList from "../components/MoviesList/MoviesList";
import { StatusBar } from "expo-status-bar";
import useFetchData from "../hooks/useFetchData";

const HomeScreen = ({ navigation }) => {
  const { moviesData, isLoading, isError } = useFetchData();

  if (isError === true) {
    return <Text>An Error has Occurred</Text>;
  }

  if (isLoading === true) {
    return <Text>Loading</Text>;
  }

  const renderMoviesListItems = (itemData) => {
    // navigate on press
    const moviePressedHandler = () => {
      navigation.navigate("MoviesDetailsScreen", {
        ...itemData.item,
      });
    };

    return (
      <MoviesList
        imagePath={itemData.item.poster_path}
        title={itemData.item.original_title}
        onPress={moviePressedHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={moviesData}
        renderItem={renderMoviesListItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

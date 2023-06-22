import { StyleSheet, Text, View } from "react-native";

import { Card } from "@rneui/themed";

const MoviesDetailsScreen = ({ route, navigation }) => {
  const { original_title, vote_average, release_date, overview, poster_path } =
    route.params;

  // set nev option title to original_title
  return (
    <View style={styles.container}>
      {/* create this into its own component  */}
      <Card containerStyle={styles.card}>
        <Card.Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${poster_path}`,
          }}
          style={styles.image}
        />
      </Card>
      <Text style={styles.text}>{overview}</Text>
    </View>
  );
};

export default MoviesDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "black",
    width: "100%",
    margin: 0,
    padding: 10,
  },
  image: {
    height: 300,

    width: "100%",
    resizeMode: "stretch",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: 0.7,
    height: "50%",
    backgroundColor: "red",
    margin: 10,
    padding: 15,
  },
});

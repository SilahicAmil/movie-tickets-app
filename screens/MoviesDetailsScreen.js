import { StyleSheet, Text, View } from "react-native";

import { Card } from "@rneui/themed";

const MoviesDetailsScreen = ({ route }) => {
  const { original_title, vote_average, release_date, overview, poster_path } =
    route.params;

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${poster_path}`,
          }}
          style={styles.image}
        />
      </Card>
      <Text>{overview}</Text>
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
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "stretch",
  },
});

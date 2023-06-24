import { StyleSheet, Text, View } from "react-native";

import { Card } from "@rneui/themed";

const MovieDetails = ({ title, description, rating, release, poster_path }) => {
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
      <View>
        <Text>{title}</Text>
        <Text>{rating}</Text>
        <Text>{release}</Text>
      </View>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

export default MovieDetails;

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

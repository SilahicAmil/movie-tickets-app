import { ScrollView, StyleSheet, Text, View } from "react-native";

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
        <Text style={styles.title}>{title}</Text>
      </View>

      <ScrollView>
        <View style={styles.detailsContainer}>
          <Text>{rating} Stars</Text>
          <Text style={styles.realease}>{release}</Text>
        </View>

        <Text style={styles.text}>{description}</Text>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  card: {
    width: "100%",
    margin: 0,
    padding: 10,
    borderWidth: 0,
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "stretch",
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    letterSpacing: 1.4,
    height: "90%",
    backgroundColor: "gray",
    margin: 10,
    padding: 15,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1.5,
    padding: 15,
  },
  realease: {
    fontSize: 14,
  },
});

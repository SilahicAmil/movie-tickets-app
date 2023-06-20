import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Card } from "@rneui/themed";

const MoviesList = ({ imagePath, title }) => {
  console.log(imagePath);
  return (
    <>
      {/* add onPress */}
      <SafeAreaView style={styles.container}>
        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
            style={styles.image}
          />
          <Card.Title style={styles.text}>{title}</Card.Title>
        </Card>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  // add styling
  container: {
    flex: 1,
  },
  card: {
    height: 420,
    borderWidth: 0,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default MoviesList;

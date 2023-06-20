import { Pressable, SafeAreaView, StyleSheet } from "react-native";

import { Card } from "@rneui/themed";

const MoviesList = ({ imagePath, title }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* add onPress */}
        <Pressable>
          <Card containerStyle={styles.card}>
            <Card.Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${imagePath}`,
              }}
              style={styles.image}
            />
            <Card.Title style={styles.text}>{title}</Card.Title>
          </Card>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 425,
    borderWidth: 0,
    margin: 6,
    marginBottom: 12,
    backgroundColor: "orange",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});

export default MoviesList;

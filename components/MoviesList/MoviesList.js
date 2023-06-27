import { Pressable, SafeAreaView, StyleSheet } from "react-native";

import { Card } from "@rneui/themed";

const MoviesList = ({ imagePath, title, onPress }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Pressable onPress={onPress}>
          <Card containerStyle={styles.card}>
            <Card.Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${imagePath}`,
              }}
              style={styles.image}
            />
            {/* add star rating in top right */}
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
    marginTop: 18,
  },
  card: {
    height: 425,
    borderWidth: 0,
    margin: 6,
    marginBottom: 8,
    backgroundColor: "#1A2232",
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
    color: "white",
  },
});

export default MoviesList;

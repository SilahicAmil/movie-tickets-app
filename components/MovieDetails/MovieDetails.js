import { Button, Card, Icon } from "@rneui/themed";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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

      <View style={styles.detailsContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.detailsText}>{rating}</Text>
          <Icon name="star" color="#DBDC50" />
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.detailsText}>{release}</Text>
          <Icon name="calendar" type="font-awesome" color="white" />
        </View>
      </View>
      <ScrollView>
        <Text style={styles.text}>{description}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        {/* should navigate to select seat screen full screen switch not a modal type thing */}
        <Button size="lg" title="Reserve Ticket" />
      </View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A2232",
    height: "100%",
  },
  card: {
    width: "100%",
    margin: 0,
    padding: 10,
    borderWidth: 0,
    backgroundColor: "black",
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "stretch",
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "normal",
    letterSpacing: 1.4,
    height: "100%",
    color: "white",
    margin: 5,
    padding: 5,
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
    color: "white",
  },
  detailsText: {
    fontSize: 16,
    color: "white",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginBottom: 32,
  },
});

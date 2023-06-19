import { Image, StyleSheet, Text, View } from "react-native";

const MoviesList = ({ imagePath, title }) => {
  return (
    <>
      <View>
        {/* put imagePath in URI */}
        <Image />
        <Text>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MoviesList;

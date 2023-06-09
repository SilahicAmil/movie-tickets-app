import MovieDetails from "../components/MovieDetails/MovieDetails";
import { useLayoutEffect } from "react";

const MoviesDetailsScreen = ({ route, navigation }) => {
  const { original_title, vote_average, release_date, overview, poster_path } =
    route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: original_title,
    });
  }, []);

  return (
    <MovieDetails
      title={original_title}
      description={overview}
      poster_path={poster_path}
      rating={vote_average}
      release={release_date}
    />
  );
};

export default MoviesDetailsScreen;

import { useEffect, useState } from "react";

import { TMDB_AUTH } from "@env";

const useFetchData = () => {
  const [moviesData, setMoviesData] = useState([]);

  const [isLoading, setIsLoading] = useState(undefined);

  const [isError, setIsError] = useState(false);

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: TMDB_AUTH,
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(url, options);

        const fullData = await data.json();

        setMoviesData(fullData.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
    };
    getData();
  }, []);
  return { moviesData, isLoading, isError };
};

export default useFetchData;

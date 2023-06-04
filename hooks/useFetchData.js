import { useEffect, useState } from "react";

import { TMDB_AUTH } from "@env";

const useFetchData = () => {
  const [moviesData, setMoviesData] = useState([]);
  //   add loading state
  //   add error state

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
      const data = await fetch(url, options);

      const fullData = await data.json();

      setMoviesData(fullData.results);
    };
    getData();
  }, []);
  return { moviesData };
};

export default useFetchData;

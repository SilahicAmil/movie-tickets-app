import { TMDB_AUTH, URL } from "@env";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [moviesData, setMoviesData] = useState([]);

  const [isLoading, setIsLoading] = useState(undefined);

  const [isError, setIsError] = useState(false);

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
        const data = await fetch(URL, options);

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

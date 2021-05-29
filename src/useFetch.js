import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setWeather(json);
        setIsLoading(false);
      } catch (error) {
        console.log(`Can't fetch data because of ${error.message} `);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { weather, isLoading, error };
};

export default useFetch;

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      //Using axios because it turns the data automatically to JSON, I may use fetch in other parts of the projects if needed
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

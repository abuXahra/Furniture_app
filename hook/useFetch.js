import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../constant/api";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://furniture-api-id5q.onrender.com/api/products`
      );
      console.log(response.data);
      console.log("API_BASE_URL:", apiUrl);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

import { useState, useEffect } from "react";
import axios from 'axios';


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '71cc4525e8msh8415db68a21d3e9p1a5d73jsn5e2c48a1487e',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },

    params: {
      ...query
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      console.log("???????????????????????????????????????????????")
      console.log(response.data.data[0].employer_logo);
      setData(response.data.data);
      setIsLoading(false)
    } catch (error) {
      alert("There is an error")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }


  return { data, isLoading, error, refetch }
}


export default useFetch;
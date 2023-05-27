import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(URL)
      .then((res) => {
        setData(res?.data?.data?.cards[2]?.data?.data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading, error];
};

export default useFetch;

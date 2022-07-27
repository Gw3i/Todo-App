import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const newData = await response.json();
      if (response.ok) {
        setData(newData);
      } else {
        console.error("Ohhh... can't fetch data!");
      }
    }
    fetchData();
  }, []);
  return [data];
}

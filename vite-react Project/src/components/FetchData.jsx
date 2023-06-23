import { useEffect, useState } from "react";

export default function FetchData({ count }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resultData = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json();
      // console.log(resultData)
      setData(resultData);
    }
    fetchData();
  }, []);

  return (
    <>
      {data.slice(0,count).map((element) => (
        <div key={element.id}>{element.title}</div>
      ))}
    </>
  );
}

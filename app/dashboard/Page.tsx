import { useState, useEffect } from "react";

const Pages = () => {
  const [data, setData] = useState<Array<any> | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const result = await res.json();
      console.log("sfsf");

      return setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((d) => (
        <li key={d.id}>{d.title}</li>
      ))}
    </div>
  );
};
export default Pages;

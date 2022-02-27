import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setIntput] = useState("");
  let [data, setData] = useState(null);
  const auth = "563492ad6f9170000100000195929b099f914577a36294801aa1dc18";
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  // fetch data from pexels api
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/son",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };

  // frtch data when the page Loads up
  useEffect(() => {
    search(intialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setIntput={setIntput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;

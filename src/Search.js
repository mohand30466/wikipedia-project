import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Search = () => {
  const [term, setterm] = useState("code");
  const [result, setresult] = useState([]);
  console.log(result);

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setresult(data.query.search);
    };

    if (term) {
      search();
    }
  }, [term]);

  const wiki_data = result.map((item) => {
    return (
      <div>
        <div>
          <h2>{item.title}</h2>
        </div>
        <div>
          <p>{item.snippet}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          value={term}
          onChange={(e) => setterm(e.target.value)}
        />
      </div>
      <div>
          {wiki_data}
      </div>
    </div>
  );
};
export default Search;

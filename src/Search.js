import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Search = () => {
  const [term, setterm] = useState("programer");
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

    const timeex = setTimeout(() => {
        
        if (term) {
            search();
          }
    }, 1000);

 
  }, [term]);

  const wiki_data = result.map((item) => {
    return (
      <div key={item.pageid}>
        <div>
          <h2>{item.title}</h2>
        </div>
        <div>
         <a href={`https://en.wikipedia.org?curid=${item.pageid}`}><h2>Go</h2></a>
          <span dangerouslySetInnerHTML={{__html: item.snippet}}></span>

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

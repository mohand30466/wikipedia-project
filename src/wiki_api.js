import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Wiki_search = ({ terms }) => {
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
          srsearch: terms,
        },
      });
      setresult(data.query.search);
    };

    const timeex = setTimeout(() => {
      if (terms) {
        search();
      }
    }, 1000);
  }, [terms]);

  const wiki_data = result.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="contant">
          <h2 className="header">{item.title}</h2>
        </div>

        <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${item.pageid}`}
        >
          Go
        </a>
        <br/>
        <br/>
      </div>
    );
  });

  return <div>{wiki_data}</div>;
};
export default Wiki_search;

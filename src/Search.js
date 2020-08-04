import React from "react";
import Wiki_search from './wiki_api'
import { useState} from "react";



const Search = () => {

  const [term, setterm] = useState("programing");
  
  return (
    <div className="ui form">
        <h4>Search for anythings by type on this area</h4>
      <div className="field">
        <input
          type="text"
          value={term}
          onChange={(e) => setterm(e.target.value)}
        />
      </div>
      <Wiki_search terms = {term}/>
    </div>
  );
};
export default Search;

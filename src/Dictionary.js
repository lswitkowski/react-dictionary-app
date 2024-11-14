import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
let [keyword, setKeyword]= useState("");

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

    function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword}...`);
}

    return (
      <div className="container">
        <h1>Dictionary</h1>
        <h3>Give me a word!</h3>
        <form className="" onSubmit={search}>
          <input
            type="search"
            className="searchbar"
            required
            onChange={handleKeywordChange}
          />
          <input type="submit" className="submit" value="&#128270;" />
        </form>
      </div>
    );}
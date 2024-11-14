import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
let [keyword, setKeyword]= useState("");

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function handleResponse(response){
    console.log(response.data);
    let word=(response.data.word);
}

    function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword}...`);

    let apiKey = "65ae2e8ao4f01409ca53644a9atfcbed";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse);
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
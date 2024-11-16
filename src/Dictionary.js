import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults]= useState("");
let [loaded, setLoaded]= useState(false);

function handleResponse(response) {
  setResults(response.data);
}

    function search(event) {
      let apiKey = "65ae2e8ao4f01409ca53644a9atfcbed";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  


function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load() {
  setLoaded(true);
  search();
}


if(loaded){
    return (
      <div className="dictionary">
        <h1 className="mt-5">Dictionary</h1>
        <h5 className="mt-5">Give me a word!</h5>
        <form className="mt-3" onSubmit={handleSubmit}>
          <input
            type="search"
            className="searchbar"
            required
            onChange={handleKeywordChange}
          />
          <input type="submit" className="submit" value="&#128270;" />
        </form>
       
        <Results results={results} />
      </div>
    );
  
  }else{
      load();
    return "Loading";}}
    
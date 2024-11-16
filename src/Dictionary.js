import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props){
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults]= useState(null);
let [photos, setPhotos] = useState(null);
let [loaded, setLoaded]= useState(false);


function handleResponse(response) {
  setResults(response.data);
}

function handleResponsePics(response) {
  setPhotos(response.data.photos);
}
    function search() {
      let apiKey = "65ae2e8ao4f01409ca53644a9atfcbed";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);

       
       let apiUrlPics = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
       axios.get(apiUrlPics).then(handleResponsePics);
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
        <div className="searchbox">
          <h5 className="mt-1">Give me a word!</h5>
          <form className="mt-2" onSubmit={handleSubmit}>
            <input
              type="search"
              className="searchbar"
              required
              onChange={handleKeywordChange}
            />
            <input type="submit" className="submit" value="&#128270;" />
          </form>
        </div>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  
  }else{
      load();
    return "Loading";}}
    
import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (

        <div className="container">
        <div className="searchWord mt-4 mb-3">
          <span className="word">{props.results.word}</span>
          <span className="phonetic"> {props.results.phonetic}</span>
        </div>

      <div className="Results">
        
        {props.results.meanings.map(function (meaning, index) {
          return (
            
            <section key={index}>
              <Meaning meanings={meaning} />
            </section>
          );

        })}
      </div></div>
    );
  } 
  
  else {
    return null;
  }
}

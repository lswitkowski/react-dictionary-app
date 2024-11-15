import React from "react";
import "./Results.css";

export default function Results(props){
if(props.results){
    return <div className="container">
        <div className="searchWord mt-4">
          <span className="word">{props.results.word}</span>
          <span className="phonetic"> ({props.results.phonetic})</span>
        </div>
        <div className="definitionWord">
          
          <div className="meaning">{props.results.meanings}</div>
        </div>
      </div>
    ;} else {return null;}}
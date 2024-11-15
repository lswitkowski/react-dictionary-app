import React from "react";
import "./Results.css";

export default function Results(props){
if(props.results){
    return (
      <div>
        <h2 className="word">{props.results.word}</h2>
      </div>
    );
 }else {return null;}}
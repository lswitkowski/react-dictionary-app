import React from "react";
import "./Meaning.css";

export default function Example(props) {
  if (props.synonyms) {
    return (
      <div className="row">
        <div className="synonym-title col-sm-2">synonyms:</div>
      <div className="synonyms col-sm-6">
        {props.synonyms.map(function (synonym, index) {
          return <div key={index}>{synonym} </div>;
        })}
      </div></div>
    );
  } else {
    return null;
  }
}

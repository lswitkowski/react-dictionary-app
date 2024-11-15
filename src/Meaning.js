import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <div className="mb-3">
          <span className="partOfSpeech">({props.meanings.partOfSpeech}) </span>
          <span className="definition">{props.meanings.definition}</span>
          <div className="example">{props.meanings.example}</div>
        </div>
      </div>
    );
    
}

import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <div className="mb-3">
          <span className="partOfSpeech">({props.meanings.partOfSpeech}) </span>
          <span className="definition">{props.meanings.definition}</span>
          <Example example={props.meanings.example} />
          <div>
            <div><Synonyms synonyms={props.meanings.synonyms}/>
            </div>
          </div>
        </div>
      </div>
    );
    
}

import React from "react";


export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>{props.meanings.definition}</p>
            <p>
              {props.meanings.example}
            </p>
          </div>
  );
}

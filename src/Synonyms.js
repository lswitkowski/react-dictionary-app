import React from "react";


export default function Synonyms(props){
    return (
      <div className="definition">
        {props.meanings.synonym}
      </div>
    );


}
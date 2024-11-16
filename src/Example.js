import React from "react";
import "./Meaning.css";

export default function Example(props) {
    if (props.example) {
      return <div className="example mt-1">Example: {props.example}</div>;
    } else {
      return null;
    }
}
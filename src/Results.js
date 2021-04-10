import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
    <div className="Results">
      <h1>
        {props.results.word}
      </h1>
      <h2>{props.results.phonetics.map(function(phonetics, index) {
        return (
          <div key={index}>
            <Phonetics phonetics={phonetics} />
          </div>
        );
        })}
      </h2>
      {props.results.meanings.map(function(meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );} else {
    return null;
  }
}
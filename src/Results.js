import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
    <div className="Results">
      <section>
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
      </section>
      {props.results.meanings.map(function(meaning, index) {
        return (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        );
      })}
    </div>
  );} else {
    return null;
  }
}
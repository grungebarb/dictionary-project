import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
  <div className="Phonetics">
    <a href={props.phonetics.audio} target="_blank" rel="noreferrer">Listen</a>
    <span className="text">{props.phonetics.text}</span>
    <audio controls src={props.phonetics.audio} className="phonetics-audio"></audio>
  </div>
  );
}
import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
  <div className="Phonetics">    
    <div>
      <span className="text-audio">{props.phonetics.text}</span>
      <audio controls src={props.phonetics.audio} className="phonetics-audio"></audio>
      <small>If the audio doesn't work, please use the "Listen" button</small>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">Listen (new tab)</a>
      <span className="text">{props.phonetics.text}</span>
    </div>
  </div>
  );
}
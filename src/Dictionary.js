import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001dd6daddb1e034ae686a3b5eb6c9f4b6c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios.get(pexelsApiUrl, { headers: {"Authorization" : pexelsApiKey}}).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>
            What word do you want to look up?
          </h2>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">
          suggested words to look up: forest, sunset, hello, daisy...
        </div>
        </section>
        <section>
          <div className="row">
            <div className="col">
              <a href={`https://www.google.com/search?q=lyrics+with+${keyword}`} target="_blank" rel="noreferrer" className="extra-info-button">🎶 Lyrics with <i>{keyword}</i></a>
            </div>
            <div className="col">
              <a href={`https://www.google.com/search?q=books+with+${keyword}`} target="_blank" rel="noreferrer" className="extra-info-button">📚 Books with <i>{keyword}</i></a>
            </div>
            <div className="col">
              <a href={`https://www.google.com/search?q=films+with+${keyword}`} target="_blank" rel="noreferrer" className="extra-info-button">🎥 Films with <i>{keyword}</i></a>
            </div>
          </div>
        </section>
        <Results results={results} />
        
        <Photos photos={photos} />
      </div>
    );
    } else {
      load(true);
      return "Loading";
    }
}
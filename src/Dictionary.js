import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }
  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
      <div>
        <section>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        </section>
        <Results results={results}/>
      </div>
    );
    } else {
      load(true);
      return "Loading";
    }
}
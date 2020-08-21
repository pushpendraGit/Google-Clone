import React from "react";
import {useStateValue} from '../StateProvider'
import "./SearchPage.css";

function SearchPage(props) {
  const [{ term }, dispatch] = useStateValue();



 //AIzaSyDHXxoywzM9iEjRVhS-tzvfzUd4t75t2as=apikey

  // https://developers.google.com/custom-search/v1/using_rest
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__reasults"></div>
    </div>
  );
}

export default SearchPage;

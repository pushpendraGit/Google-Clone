import { useState, useEffect } from "react";

import API_KEY from "./keys";

const CONTEXT_KEY = "d540a1c1ca3399ab2";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  //console.log("You resched to serach***************");

  useEffect(() => {
    const fetchData = async (term) => {
      console.log("Your term is *******", term);
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((responce) => responce.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData(term);

  }, [term]);
 // console.log("Your main data is ", data);


  return { data };


};

export default useGoogleSearch;

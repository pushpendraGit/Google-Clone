import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

import "./Search.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionsTypes } from "../reducer";

function Search({ hideButtons=false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("Your hit the seach button", input);

    dispatch({
      type: actionsTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {hideButtons ? (
        <div className="search__buttons hide">
          <Button
            type="submit"
            className="search__buttonsHidden"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button
            type="submit"
            className="search__buttonsHidden"
            variant="outlined"
          >
            I'am feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button type="submit" variant="outlined">
            I'am feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;

import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";

import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import RoomIcon from "@material-ui/icons/Room";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import Responce from "../responce";
import { Link } from "@material-ui/core";
import "./SearchPage.css";
import Search from "./Search";

function SearchPage(props) {
  const [{ term }, dispatch] = useStateValue();
  /*
  //const {data}  = useGoogleSearch(term);  //this is for live api code

  //console.log('Your all data is=====>', data);
  */

  const data = Responce;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="searchpage logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons={true} />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/map">maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__reasults"></div>
    </div>
  );
}

export default SearchPage;

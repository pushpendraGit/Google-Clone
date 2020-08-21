import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import "./Home.css";
import Search from "./Search";

function Home(props) {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLefr">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">G-mail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar alt="Cindy Baker" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google lodo"
        />
        <div className="home__inputContainer">
            <Search hideButtons={false}/>

        </div>
      </div>
    </div>
  );
}

export default Home;

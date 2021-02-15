import React from "react";
import "../styling/Player.css";
import Body from "./Body";
import SideBar from "./SideBar";
import "../styling/Player.css";
import Footer from "./Footer";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;

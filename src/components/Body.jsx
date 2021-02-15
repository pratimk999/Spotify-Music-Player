import React, { useState } from "react";
import "../styling/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const [loved, setLoved] = useState(false);
  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcGVbfdGcEzlm`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        console.log("RESPONSE", res);
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  // console.log("discover_weekly ✋", discover_weekly);

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
          <p>
            <strong>Spotify .</strong> {discover_weekly?.tracks.items.length}{" "}
            tracks
          </p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon
            fontSize="large"
            className={`${
              loved ? "body__favouriteSelected" : "body__favouriteNotSelected"
            }`}
            onClick={() => {
              setLoved(!loved);
            }}
          />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow
            playSong={playSong}
            track={item.track}
            key={item.track.name}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;

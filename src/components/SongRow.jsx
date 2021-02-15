import React from "react";
import "../styling/SongRow.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function SongRow({ playSong, track, index }) {
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <h5>{index + 1}</h5>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")} </p>
        <small>{track.album.name}</small>
      </div>
      <div className="songRow__buttons">
        <FavoriteIcon className="songRow__like" />
        <PlayCircleFilledIcon className="songRow__play" />
      </div>
    </div>
  );
}

export default SongRow;

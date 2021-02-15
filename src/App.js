import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  const [{ token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log(hash);
    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcGVbfdGcEzlm").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      getPlaylist();
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, []);

  const getPlaylist = () => {
    spotify
      .getUserPlaylists("31mgcepmm5ruijgufyxlgrbifpe4")
      .then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
  };

  // console.log("👷‍♂️", spotify.getAccessToken());
  console.log("👷‍♂️", playlists);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

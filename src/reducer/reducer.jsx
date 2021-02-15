export const initialState = {
  user: null,
  playlists: {},
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  console.log("🔫", state);

  switch (action.type) {
    case "SET_USER":
      state = {
        ...state,
        user: action.user,
      };
      break;
    case "SET_TOKEN":
      state = {
        ...state,
        token: action.token,
      };
      break;
    case "SET_PLAYLIST":
      state = {
        ...state,
        playlists: action.playlists,
      };
      break;
    case "SET_DISCOVER_WEEKLY":
      state = {
        ...state,
        discover_weekly: action.discover_weekly,
      };
      break;
    case "SET_PLAYING":
      state = {
        ...state,
        playing: action.playing,
      };
      break;

    case "SET_ITEM":
      state = {
        ...state,
        item: action.item,
      };
      break;
    case "SET_SPOTIFY":
      state = {
        ...state,
        spotify: action.spotify,
      };

      break;
    case "SET_TOP_ARTISTS":
      state = {
        ...state,
        top_artists: action.top_artists,
      };
      break;

    default:
      break;
  }

  return state;
};

export default reducer;

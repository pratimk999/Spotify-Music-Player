import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromURL } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log(hash);
    if (_token) {
      setToken(_token);
    }
  }, [token]);
  return <div className="app">{token ? <h1>hello</h1> : <Login />}</div>;
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login/login';
import { getTokenFromUrl } from './pages/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './pages/Player/Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      );

      spotify.getPlaylist('37i9dQZF1DX5trt9i14X7j').then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );
      
    }
  }, []);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
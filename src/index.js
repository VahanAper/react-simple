import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyBA-67_dxDJyAFqQCkdSW7_l66DAR6QRpk'; //eslint-disable-line

const App = () => {
  return (
    <div>
      <p>Ռեա՞կտ</p>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));

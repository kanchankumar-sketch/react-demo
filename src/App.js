import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import TopHeader from './components/header/TopHeader';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <BrowserRouter>
    <div className="App" id="outer-container">
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <TopHeader/>
      <div id="page-wrap">
        {/* <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2> */}
        <MainRoutes />
      </div>    
    </div>
    </BrowserRouter>
  );
}

export default App;
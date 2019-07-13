import React from 'react';
import './App.css';
import Header from "./components/Header";
import Composer from "./components/Composer";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="compenet">
        <Header/>
        <div classname="content">
         <Composer/>
          <div className="posts">
            <Post/>
          </div>
        </div>
        <hr/>
        <Footer/>
      </div>
  );
}

export default App;

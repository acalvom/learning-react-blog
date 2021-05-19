import React, {Fragment} from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

    return (
        <Fragment className="App">
            <Navbar/>
            <div className="container">
                <Home/>
            </div>
        </Fragment>
    );
}

export default App;



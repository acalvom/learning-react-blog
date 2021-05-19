import React, {Fragment} from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

    return (
        <Fragment>
            <Navbar/>
            <div className="container my-3">
                <Home/>
            </div>
        </Fragment>
    );
}

export default App;



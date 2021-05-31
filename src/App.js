import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css'
import NewEntryForm from "./components/NewEntryForm";
import GamesDeals from "./components/GamesDeals";

function App() {

    return (
        <Router>
            <Navbar/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/new-entry"><NewEntryForm/></Route>
                    <Route path="/games-deals"><GamesDeals/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;



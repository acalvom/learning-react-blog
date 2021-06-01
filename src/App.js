import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewEntryForm from "./components/NewEntryForm";
import GamesDeals from "./components/GamesDeals";
import GameDealDetail from "./components/GameDealDetail";
import EntryDetail from "./components/EntryDetail";
import './App.css'

function App() {

    return (
        <Router>
            <Navbar/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/blog/:id"><EntryDetail/></Route>
                    <Route path="/new-entry"><NewEntryForm/></Route>
                    <Route exact path="/games-deals"><GamesDeals/></Route>
                    <Route path="/games-deals/:id"><GameDealDetail/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;



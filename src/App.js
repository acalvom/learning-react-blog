import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import NewEntryForm from "./components/blog/NewEntryForm";
import GamesDeals from "./components/gamesdeals/GamesDeals";
import GameDealDetail from "./components/gamesdeals/GameDealDetail";
import EntryDetail from "./components/blog/EntryDetail";
import './App.css'
import NewEntryFormBlock from "./components/blog/NewEntryFormBlock";
import NotFound from "./components/blog/NotFound";

function App() {

    return (
        <Router>
            <Navbar/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/blog/:id"><EntryDetail/></Route>
                    <Route path="/new-entry"><NewEntryFormBlock/></Route>
                    <Route exact path="/games-deals"><GamesDeals/></Route>
                    <Route path="/games-deals/:id"><GameDealDetail/></Route>
                    <Route path="/*"><NotFound/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;



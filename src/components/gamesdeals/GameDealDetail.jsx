import React from 'react';
import useFetch from "../../hooks/useFetch";
import {useParams} from 'react-router-dom';
import GameInfoCard from "./GameInfoCard";

const GameDealDetail = () => {
    const {id} = useParams();
    const {data: deal, isPending, fetchError} = useFetch('https://www.cheapshark.com/api/1.0/deals?id=' + id);
    const gameInfo = deal.gameInfo;
    return (
        <div className="container">
            <h1> {gameInfo && gameInfo.name} </h1>
            <hr/>
            <div className="row">
                <div className="col-sm">
                    {isPending && <div><h2>Fetching data...</h2></div>}
                    {gameInfo && <GameInfoCard data={gameInfo}/>}
                    {fetchError && <div><h3>{fetchError}</h3></div>}
                </div>
            </div>
        </div>
    );
};

export default GameDealDetail;
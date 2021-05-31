import React from 'react';
import useFetch from "../hooks/useFetch";
import {useParams} from 'react-router-dom';

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
                    {gameInfo &&
                    <div className="card my-2">
                        <img className="card-img-top" src={gameInfo.thumb} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{gameInfo.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Game ID: {gameInfo.gameID}</h6>
                            <p className="card-text">PVP: {gameInfo.retailPrice} €</p>
                            <p className="card-text">With deal applied: {gameInfo.salePrice} €</p>
                        </div>
                    </div>
                    }
                    {fetchError && <div><h3>{fetchError}</h3></div>}
                </div>
            </div>
        </div>
    );
};

export default GameDealDetail;
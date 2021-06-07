import React from 'react';

const GameInfoCard = (props) => {
    const game = props.data;
    return (
        <div className="card my-2">
            <img className="card-img-top" src={game.thumb} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Game ID: {game.gameID}</h6>
                <p className="card-text">PVP: {game.retailPrice} €</p>
                <p className="card-text">With deal applied: {game.salePrice} €</p>
            </div>
        </div>
    );
};

export default GameInfoCard;
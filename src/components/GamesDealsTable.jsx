import React from 'react';
import {Link} from "react-router-dom";

const GamesDealsTable = (props) => {
    const deals = props.data;
    const title = props.pageTitle;

    return (
        <div>
            <h1> {title} </h1>
            <hr/>
            <table className="table table-sm table-bordered">
                <thead>
                <tr>
                    <th>Game</th>
                    <th>Normal Price</th>
                    <th>Discount</th>
                    <th>Sale Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    deals.length > 0 ?
                        deals.map((item) =>
                            <tr key={item.dealID}>
                                <td> {item.title}</td>
                                <td> {item.normalPrice}</td>
                                <td> {item.savings}</td>
                                <td> {item.salePrice}</td>
                                <td>
                                    <Link to={`/games-deals/${item.dealID}`}> Details</Link>
                                </td>
                            </tr>
                        ) :
                        <tr>
                            <td colSpan={3}> No games to show</td>
                        </tr>
                }
                </tbody>
            </table>
        </div>
    );
};

export default GamesDealsTable;
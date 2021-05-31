import React from 'react';
import useFetch from "../hooks/useFetch";

const GamesDeals = () => {
    // const {data: deals, isPending, fetchError} = useFetch('http://localhost:7000/deals');
    const {data: deals, isPending, fetchError} = useFetch('https://www.cheapshark.com/api/1.0/deals');

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    {isPending && <div><h2>Fetching data...</h2></div>}
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
                                    </tr>
                                ) :
                                <tr>
                                    <td colSpan={3}> No users</td>
                                </tr>
                        }
                        </tbody>
                    </table>
                    {fetchError && <div><h3>{fetchError}</h3></div>}
                </div>
            </div>
        </div>
    );
};

export default GamesDeals;
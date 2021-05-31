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
                    {
                        deals.map((item) =>
                            <li key={item.dealID}>
                                {item.title} - {item.normalPrice} - {item.salePrice}
                            </li>)
                    }
                    {fetchError && <div><h3>{fetchError}</h3></div>}
                </div>
            </div>
        </div>
    );
};

export default GamesDeals;
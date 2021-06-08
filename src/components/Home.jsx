import React, {Fragment} from 'react';
import './Home.css'
import EntriesList from "./blog/EntriesList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const {data: blog, isPending, fetchError} = useFetch('http://localhost:8000/blog');

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        {isPending && <div><h2>Fetching data...</h2></div>}
                        {blog && <EntriesList entries={blog} pageTitle={"Blog Entries"}/>}
                        {fetchError && <div><h3>{fetchError}</h3></div>}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

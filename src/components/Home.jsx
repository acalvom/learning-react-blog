import React, {Fragment} from 'react';
import './Home.css'
import EntriesList from "./EntriesList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const {data: blog, isPending, fetchError} = useFetch('http://localhost:8000/blog');

    const handleDeleteClick = (id) => {
        // Esta función no tiene mucho sentido ahora porque los datos están en una BD
        console.log(id)
        return (blog.filter(item => item.id !== id))
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        {isPending && <div><h2>Fetching data...</h2></div>}
                        {blog && <EntriesList entries={blog} delete={handleDeleteClick} pageTitle={"Blog Entries"}/>}
                        {fetchError && <div><h3>{fetchError}</h3></div>}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

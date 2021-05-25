import React, {Fragment, useEffect, useState} from 'react';
import './Home.css'
import EntriesList from "./EntriesList";

const Home = () => {

    const [blog, setBlog] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        fetchBlogs().catch(e => {
            setFetchError(e.message)
        })
    }, []) // useEffect Dependency: [] solo lo ejecuta una vez, [name] solo lo ejecuta cuando "name" cambia

    const fetchBlogs = async () => {
        const data = await fetch('http://localhost:8000/blog');
        if (!data.ok)
            throw new Error(`HTTP error status: ${data.status}`)
         else {
            const blog = await data.json();
            setIsPending(false);
            setFetchError(null);
            setBlog(blog);
        }
    }

    const handleDeleteClick = (id) => {
        setBlog(blog.filter(item => item.id !== id))
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        {isPending && <div><h2>Fetching data...</h2></div>}
                        <EntriesList entries={blog} delete={handleDeleteClick} pageTitle={"Blog Entries"}/>
                        {fetchError && <div><h3>{fetchError}</h3></div>}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

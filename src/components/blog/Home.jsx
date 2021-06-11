import React, {Fragment, useEffect} from 'react';
import './Home.css'
import EntriesList from "./EntriesList";
import {useDispatch, useSelector} from "react-redux";
import {getBlog} from "../../store/blogActions";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlog())
    }, [dispatch])

    const blog = useSelector(state => state.blog.entries);

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        {blog && <EntriesList entries={blog} pageTitle={"Blog Entries"}/>}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

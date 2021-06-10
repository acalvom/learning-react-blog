import React, {Fragment} from 'react';
import './Home.css'
import EntriesList from "./EntriesList";
import{useSelector} from "react-redux";


const Home = () => {
    const blog = useSelector(state => state.blog);

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

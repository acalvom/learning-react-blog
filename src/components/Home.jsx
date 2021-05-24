import React, {Fragment, useState} from 'react';
import './Home.css'
import EntriesList from "./EntriesList";

const Home = () => {

    const [entry, setEntry] = useState({id: 3, title: "Hi!", content: 'This is a new entry', author: 'wiwi'});
    const [blog, setBlog] = useState([
        {id: 0, title: 'Welcome', content: 'This is the first post', author: 'acalvom'},
        {id: 1, title: 'Hello', content: 'This is the second post', author: 'acm'},
        {id: 2, title: "What's up", content: 'This is the third post', author: 'acalvom'},
        {id: 3, title: 'Hi', content: 'This is the fourth post', author: 'acalvom'},
        {id: 4, title: "Bye bye", content: 'This is the fifth post', author: 'acm'},
        {id: 5, title: "Ciao", content: 'This is the sixth post', author: 'acm'}
    ]);

    const acmEntries = blog.filter(item => item.author === 'acm');
    const acalvomEntries = blog.filter(item => item.author === 'acalvom');

    const handleClick = () => {
        setEntry({id: entry.id + 1, title: "Hi!", content: 'This is a new entry', author: 'wiwi'})
        setBlog([
            ...blog,
            entry
        ]);
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <EntriesList entries={blog} pageTitle={"Blog Entries"}/>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>New entry</button>
                    </div>
                    <div className="col-sm">
                        <EntriesList entries={acmEntries} pageTitle={"acm Entries"}/>
                    </div>
                    <div className="col-sm">
                        <EntriesList entries={acalvomEntries} pageTitle={"acalvom Entries"}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

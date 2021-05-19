import React, {Fragment, useState} from 'react';
import './Home.css'

const Home = () => {

    const [entry, setEntry] = useState({id: 3, title: "Hi!", content: 'This is a new entry', author: 'wiwi'});
    const [blog, setBlog] = useState([
        {id: 0, title: 'Welcome', content: 'This is the first post', author: 'acalvom'},
        {id: 1, title: 'Hello', content: 'This is the second post', author: 'acalvom'},
        {id: 2, title: "What's up", content: 'This is the third post', author: 'acalvom'}
    ]);

    const handleClick = () => {
        setEntry({id: entry.id + 1, title: "Hi!", content: 'This is a new entry', author: 'wiwi'})
        setBlog([
            ...blog,
            entry
        ]);
    }
    return (
        <Fragment>
            <h1> Entries </h1>
            <hr/>
            {
                blog.map((item) =>
                    <div key={item.id} className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
                            <p className="card-text">{item.content}</p>
                        </div>
                    </div>
                )
            }
            <button type="button" className="btn btn-primary" onClick={handleClick}>New entry</button>
        </Fragment>
    );
};

export default Home;

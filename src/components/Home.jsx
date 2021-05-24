import React, {Fragment, useEffect, useState} from 'react';
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
    const [name, setName] = useState('Andrea');

    useEffect(() => {
        console.log('Render')
        document.title = name;
    }, [name]) // useEffect Dependency: [] solo lo ejecuta una vez, [name] solo lo ejecuta cuando "name" cambia

    const handleClick = () => {
        setEntry({id: entry.id + 1, title: "Hi!", content: 'This is a new entry', author: 'wiwi'})
        setBlog([
            ...blog,
            entry
        ]);
    }

    const handleNameClick = () => {
        setName(name.split("").reverse().join(""));
    }
    const handleDeleteClick = (id) => {
        setBlog(blog.filter(item => item.id !== id))
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <EntriesList entries={blog} delete={handleDeleteClick} pageTitle={"Blog Entries"}/>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>New entry</button>
                    </div>
                    <div className="col-sm">
                        <h2>{name}</h2>
                        <button type="button" className="btn btn-primary" onClick={handleNameClick}>Click here</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

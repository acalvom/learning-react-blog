import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const NewEntryFormBlock = () => {
    const [entry, setEntry] = useState({title: '', author: 'acalvom', content: ''});
    const history = useHistory();

    const handleSubmitForm = (event) => {
        event.preventDefault();
        history.push('/');
    }

    const handleOnChange = (e) => {
        setEntry({
            ...entry,
            [e.target.id]: e.target.value
        });
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="title" required
                       value={entry.title}
                       onChange={handleOnChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <select className="form-control" id="author" required
                        value={entry.author}
                        onChange={handleOnChange}>
                    <option>acalvom</option>
                    <option>acm</option>
                </select>
            </div>
            <div className="form-group">
                <label>Content</label>
                <textarea className="form-control" id="content" rows="3" required
                          value={entry.content}
                          onChange={handleOnChange}/>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Add entry</button>
        </form>
    );
};

export default NewEntryFormBlock;
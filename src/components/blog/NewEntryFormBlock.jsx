import React, {useState} from 'react';

const NewEntryFormBlock = () => {
    const [entry, setEntry] = useState( {title: '', author: 'acalvom', content:''});

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const entry = {title, author, content}
        console.log(entry);
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="title" required
                       value={entry.title}
                       onChange={(event) => {
                           setEntry({...entry, title: event.target.value})
                       }}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <select className="form-control" id="author" required
                        value={entry.author}
                        onChange={(event) => {
                            setEntry({...entry, author: event.target.value})
                        }}>
                    <option>acalvom</option>
                    <option>acm</option>
                </select>
            </div>
            <div className="form-group">
                <label>Content</label>
                <textarea className="form-control" id="content" rows="3" required
                          value={entry.content}
                          onChange={(event) => {
                              setEntry({...entry, content: event.target.value})
                          }}/>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Add Entry</button>
        </form>
    );
};

export default NewEntryFormBlock;
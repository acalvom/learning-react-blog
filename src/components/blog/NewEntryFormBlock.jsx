import React, {useState} from 'react';

const NewEntryFormBlock = () => {
    const [entry, setEntry] = useState({title: '', author: 'acalvom', content: ''});

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(entry);
    }

    const handleOnChange = (e) => {
        // Tenemos que pasarle el id porque es la forma que tiene de identificar el input con los datos
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
            <button type="submit" className="btn btn-primary btn-sm">Add Entry</button>
        </form>
    );
};

export default NewEntryFormBlock;
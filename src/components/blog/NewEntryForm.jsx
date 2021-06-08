import React, {useState} from 'react';

const NewEntryForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('acalvom');
    const [content, setContent] = useState('');
    const [isPending, setIsPending] = useState(false);

    const postData = async (data) => {
        setIsPending(true);
        const response = await fetch('http://localhost:8000/blog', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        if (!response.ok)
            throw new Error(`HTTP error status: ${response.status}`)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const entry = {title, author, content}
        postData(entry)
            .catch(e => <div><h3>{e.message}</h3></div>)
        setIsPending(false);
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="title" required
                       value={title}
                       onChange={(event) => {
                           setTitle(event.target.value)
                       }}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <select className="form-control" id="author" required
                        value={author}
                        onChange={(event) => {
                            setAuthor(event.target.value)
                        }}>
                    <option>acalvom</option>
                    <option>acm</option>
                </select>
            </div>
            <div className="form-group">
                <label>Content</label>
                <textarea className="form-control" id="content" rows="3" required
                          value={content}
                          onChange={(event) => {
                              setContent(event.target.value)
                          }}/>
            </div>
            {!isPending && <button type="submit" className="btn btn-primary btn-sm">Add entry</button>}
            {isPending && <button className="btn btn-primary btn-sm" disabled>Adding entry...</button>}
        </form>
    );
};

export default NewEntryForm;
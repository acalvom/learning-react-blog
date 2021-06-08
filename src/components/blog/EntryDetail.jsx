import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import useFetch from "../../hooks/useFetch";

const EntryDetail = () => {
    const {id} = useParams();
    const {data: entry, fetchError, isPending} = useFetch('http://localhost:8000/blog/' + id);
    const history = useHistory();

    const deleteData = async () => {
        const response = await fetch('http://localhost:8000/blog/' + id, {
            method: 'DELETE',
        });
        if (!response.ok)
            throw new Error(`HTTP error status: ${response.status}`)
    }

    const handleDeleteClick = () => {
        deleteData()
            .catch(e => <div><h3>{e.message}</h3></div>);
        history.push('/');
    }

    return (
        <div className="entry-details">
            {isPending && <div><h2>Loading entry...</h2></div>}
            {fetchError && <div><h3>{fetchError}</h3></div>}
            {entry && <div>
                <h2>{entry.title}</h2>
                <h4>By: {entry.author}</h4>
                <hr/>
                <p>{entry.content}</p>
                <button type="button" className="btn btn-outline-danger btn-sm"
                        onClick={handleDeleteClick}>Delete
                </button>
            </div>}
        </div>
    );
};

export default EntryDetail;
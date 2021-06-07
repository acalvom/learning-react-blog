import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from "../../hooks/useFetch";

const EntryDetail = () => {
    const {id} = useParams();
    const {data: entry, fetchError, isPending} = useFetch('http://localhost:8000/blog/' + id);

    return (
        <div className="entry-details">
            {isPending && <div><h2>Loading entry...</h2></div>}
            {fetchError && <div><h3>{fetchError}</h3></div>}
            {entry && <div>
                <h2>{entry.title}</h2>
                <h4>By: {entry.author}</h4>
                <hr/>
                <p>{entry.content}</p>
            </div>}
        </div>
    );
};

export default EntryDetail;
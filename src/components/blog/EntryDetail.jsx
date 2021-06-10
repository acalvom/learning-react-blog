import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

const EntryDetail = () => {
    const {id} = useParams();
    const entry = useSelector((state) => state.blog[id]);

    return (
        <div className="entry-details">
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
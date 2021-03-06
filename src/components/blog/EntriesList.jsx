import React from 'react';
import {Link} from "react-router-dom";

const EntriesList = (props) => {
    const blog = props.entries;
    const title = props.pageTitle;

    const handleDeleteClick = (id) => {
        fetch('http://localhost:8000/blog/' + id, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload(false);
        })
    }

    return (
        <div>
            <h1> {title} </h1>
            <hr/>
            {
                blog.map((item) =>
                    <div key={item.id} className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={`blog/${item.id}`}>{item.title}</Link>
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
                            <button type="button" className="btn btn-outline-danger btn-sm"
                                    onClick={() => handleDeleteClick(item.id)}>Delete
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default EntriesList;
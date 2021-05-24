import React from 'react';

const EntriesList = (props) => {
    const blog = props.entries;
    const title = props.pageTitle;

    const handleDeleteClick = (id) => {
        console.log('Delete id ', id)
    }

    return (
        <div>
            <h1> {title} </h1>
            <hr/>
            {
                blog.map((item) =>
                    <div key={item.id} className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
                            <p className="card-text">{item.content}</p>
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
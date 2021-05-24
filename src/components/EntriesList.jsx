import React from 'react';

const EntriesList = (props) => {
    const blog = props.entries;
    const title = props.pageTitle;

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
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default EntriesList;
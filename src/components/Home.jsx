import React, {Fragment, useState} from 'react';

const Home = () => {
    const handleClick = () => {
        setName(name.split("").reverse().join(""));
        setAge(age * (-1))
    }

    const [name, setName] = useState('Andrea');
    const [age, setAge] = useState(25);

    return (
        <Fragment>
            <h1>Home</h1>
            <hr/>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Click here</button>
            <h2>{name} is {age} years old</h2>
        </Fragment>
    );
};

export default Home;

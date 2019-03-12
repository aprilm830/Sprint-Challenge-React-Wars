import React from 'react';
import './Character.css';

const Character = props =>
{
    return (
        <div className="MainChar">
            <h1 className="MainName">{props.data.name}</h1>
            <p className="MainStat">Birth Year: {props.data.birth_year}</p>
            <p className="MainStat">Eye Color:{props.data.eye_color}</p>
            <p className="MainStat">Gender:{props.data.gender}</p>
            <p className="MainStat">Mass:{props.data.mass}</p>
        </div>
    );
};

export default Character;

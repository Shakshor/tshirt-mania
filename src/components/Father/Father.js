import React from 'react';
import Myself from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>house: {house}</p>
            <div style={{ display: 'flex' }}>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;
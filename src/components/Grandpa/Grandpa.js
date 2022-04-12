import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

/*---------- 
* Context api
* 1. call createContext with a default value
* 2. set a variable of the context with uppercase
* 3. Make sure export the context to use it in other places
* 4. Wrap your child content using RingContext.provider
* 5. Provide a value
* 6. to consume the context from child component
* 7. useContext hook and you need to pass the contextName
* 8. Make sure to take notes
------------*/

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Kada Matir Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h3>Grandpa</h3>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <p>House: {house}</p>
                <section style={{ display: 'flex' }
                }>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div >
        </RingContext.Provider>
    );
};

export default Grandpa;
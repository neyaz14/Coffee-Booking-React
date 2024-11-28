import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';

const Coffees = () => {
    const coffees = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-3 gap-3 text-center'>

                {
                    coffees.map(coffee => <Card
                         coffee={coffee} key={coffee.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;
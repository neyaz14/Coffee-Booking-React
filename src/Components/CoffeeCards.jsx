import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    const navigate = useNavigate();
    const coffees = useLoaderData();
    console.log(coffees)
    const { category } = useParams();

    const [Coffees, setCoffees] = useState([]);

    // 12 ta obj theke match kore amk data dekhate hobe. and tao just component load holei .....
    useEffect(() => {
        if (category) {
            const SpecificCoffee = [...coffees].filter(coffee => coffee.category === category);
            setCoffees(SpecificCoffee);
        }else{
            setCoffees(coffees.slice(0,6));
        }

    }, [category, coffees])
    return (
        <div>
            {/* <p>{category}</p> */}

            <div className='grid grid-cols-3 gap-3 text-center'>

                {
                    Coffees.map(coffee => <Card coffee={coffee} key={coffee.id}></Card>)
                }
            </div>
            <button className='btn btn-warning' onClick={()=> {navigate('/coffees')}}>View All</button>
        </div>
    );
};

export default CoffeeCards;
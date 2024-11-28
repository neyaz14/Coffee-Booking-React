import React from 'react';

const Card = ({coffee}) => {
    const {id,name,image,category,ingredients,nutrition_info,origin,type,description,making_process,rating,popularity} = coffee || {};
    return (
        <div className='border mt-4'>
            <figure>
                <img src={image} alt="" />
            </figure>
            {name}
        </div>
    );
};

export default Card;
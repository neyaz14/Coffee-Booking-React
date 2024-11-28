import React from 'react';

const Heading = ({titel, subtitle}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl'>{titel}</h1>
            <h1 className='font-thin'>{subtitle}</h1>
        </div>
    );
};

export default Heading;
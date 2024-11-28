import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Catagories from '../Components/Catagories';

const Home = () => {
    const categories = useLoaderData();
    // const [categores, usecategores] = useState();
    // useEffect(()=>{
    //     fetch('./categories.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    console.log(categories)
    return (
        <div>
            <p>home</p>
            <Banner></Banner>
            <Heading titel={'Cofee Been'} subtitle={'subtitle is herer'}></Heading>
            {/*  */}
            <Catagories categories={categories}></Catagories>
            <Outlet>


            </Outlet>
        </div>
    );
};

export default Home;
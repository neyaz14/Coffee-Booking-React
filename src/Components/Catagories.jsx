import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Catagories = ({ categories }) => {
    
    // console.log(categories)
    return (
        <div>
            <div role="tablist" className="tabs tabs-bordered">
                {
                    categories.map(category =>
                        <NavLink key={category.category} to={`/category/${category.category}` }role="tab" 
// Navlink er default value isActive ja true hole ekta class add kora hocce and na hole add kora hocce na
                        className={({isActive})=>`tab ${isActive? 'tab-active': ''}`}>{category.category}
                        </NavLink>)
                }
            </div>

        </div>
    );
};

export default Catagories;
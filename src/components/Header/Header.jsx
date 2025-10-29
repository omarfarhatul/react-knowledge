import profile from '../../assets/images/profile.png'
import React from 'react';

const Header = () => {
    return (
        <div className='flex'>
            <h1 className='text-6xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
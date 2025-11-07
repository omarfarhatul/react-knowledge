import profile from '../../assets/images/profile.png'
import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-7xl border-b-2 mx-auto mb-8'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="profile_img" />
        </header>
    );
}

export default Header;
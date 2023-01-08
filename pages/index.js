import React from 'react';
import Menu from './menu';


function Home() {
    return (
        <div>
            <header />
            <Menu />
            <div className='container'>
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default Home;
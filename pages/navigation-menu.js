import React from 'react';
import Link from 'next/link';
import styles from '../styles/navigationMenu.module.css';


const categories = ['Action', 'Adventure', 'Puzzle', 'Strategy'];

const NavigationMenu = () => {
    return (
        <nav className='nav'>
            <ul className='ul'>
                {categories.map((category) => (
                    <li key={category}>
                        <Link href={"categories"} as={`/categories/${category.toLowerCase()}`} className="link">{category}</Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
};

export default NavigationMenu;
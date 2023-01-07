import React from 'react';
import Link from 'next/link';
import "../styles/navigationMenu.module.css"


const categories = ['Action', 'Adventure', 'Puzzle', 'Strategy'];

const NavigationMenu = () => {
    return (
        <nav>
            <ul id='ul'>
                {categories.map((category) => (
                    <li key={category} id="li">
                        <Link href={"categories"} as={`/categories/${category.toLowerCase()}`} id="link">{category}</Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
};

export default NavigationMenu;
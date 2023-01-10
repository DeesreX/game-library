import React from 'react';
import Link from 'next/link';


const categories = ['Action', 'Adventure', 'Puzzle', 'Strategy'];

const NavigationMenu = () => {
    return (
        <nav className='nav'>
            <Link href="/" className='link'>
                Home
            </Link>
            <ul className='ul'>
                {categories.map((category) => (
                    <li key={category}>
                        <Link href={"categories"} as={`/categories/${category.toLowerCase()}`} className="link">{category}</Link>
                    </li>

                ))}

            </ul>
            <Link href="/about" className='link'>
                About
            </Link>
        </nav>

    );
};

export default NavigationMenu;
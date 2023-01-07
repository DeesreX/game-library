import React from 'react';
import Link from 'next/link';

const categories = ['Action', 'Adventure', 'Puzzle', 'Strategy'];

const NavigationMenu = () => {
    return (
        <nav>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <Link href={"categories"} as={`/categories/${category.toLowerCase()}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
};

export default NavigationMenu;
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


            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #222;
                    color: #fff;
                    padding: 1rem;
                }
                Link {
                    color: #fff;
                    text-decoration: none;
                    font-size: 18px;
                    font-weight: bold;
                    margin-right: 1rem;
                    transition: color 0.2s;
                }
                Link:hover {
                    color: #ccc;

                }
                ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    }
          
                li {
                    list-style: none;
                    margin-right: 1rem;
                }
            `}</style>
        </nav>

    );
};

export default NavigationMenu;
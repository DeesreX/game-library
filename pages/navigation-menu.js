import React from 'react';
import Link from 'next/link';

const categories = ['Action', 'Adventure', 'Puzzle', 'Strategy'];

const NavigationMenu = () => {
  return (
    <nav>
      {categories.map((category) => (
        <Link href={`/categories/${category}`} key={category}>
          {category}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationMenu;
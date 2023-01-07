import React from 'react';
import Link from 'next/link';
import NavigationMenu from './navigation-menu';
import '../styles/Menu.module.css';

const Menu = () => {
  return (
    <nav className='nav'>
      <Link href="/" className='link'>
        Home
      </Link>
      <NavigationMenu />
      <Link href="/about" className='link'>
        About
        </Link>
    </nav>
  );
};

export default Menu;
import React from 'react';
import Link from 'next/link';
import NavigationMenu from './navigation-menu';

const Menu = () => {
  return (
    <nav>
      <Link href='/'>
        Home
      </Link>
      <NavigationMenu />
      <Link href="/about">
        About
        </Link>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #222;
          color: #fff;
          padding: 1rem;
        }
        a {
          color: #fff;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          margin-right: 1rem;
          transition: color 0.2s;
        }
        a:hover {
          color: #ccc;
        }
      `}</style>
    </nav>
  );
};

export default Menu;
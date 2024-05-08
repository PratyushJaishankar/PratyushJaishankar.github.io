'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 shadow-md bg-gray-900 text-white ${scrolling ? 'opacity-0' : 'opacity-100 transition-opacity'}`}>
      <div className="mr-4">
        <Link href="/">
          <div className="cursor-pointer">
            <Image src="/hom.jpg"  alt="Home" width={32} height={32} />
          </div>
        </Link>
      </div>
      <div className="flex">
        <Link href="/about">
          <div className="mr-4 cursor-pointer">About</div>
        </Link>
        <Link href="/experiences">
          <div className="mr-4 cursor-pointer">Experiences</div>
        </Link>
        <Link href="/projects">
          <div className="mr-4 cursor-pointer">Projects</div>
        </Link>
        <Link href="/contact">
          <div className="cursor-pointer">Contact</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

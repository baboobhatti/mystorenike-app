'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-50">
      <div className="flex justify-between items-center h-12 px-4 md:px-10">
        {/* Logo */}
        <div className="ml-2">
          <Image src="/images/jordan.png" alt="logo" width={40} height={40} />
        </div>

      
        <div
          className='w-auto bg-slate-50'>
          <ul className="flex items-center gap-3 sm:gap-8">
            <li>
              <Link href="/">
                Find Store
              </Link>
            </li>
            <li>
              <Link href="/projects">
                Help
              </Link>
            </li>
            <li>
              <Link href="/about">
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/signin">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

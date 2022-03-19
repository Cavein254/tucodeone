import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  const { data, status } = useSession();

  const handleSignIn = async () => {
    await signIn('google', { callbackUrl: process.env.CALLBACKURL });
  };

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {/* {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))} */}
            {status ? (
              <button
                onClick={handleSignOut}
                className='m-1 bg-red-500 px-4 py-2 hover:bg-green-500'
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                className='m-1 bg-green-500 px-4 py-2 hover:bg-blue-500'
              >
                Login
              </button>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

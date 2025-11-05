import Link from 'next/link'
import React from 'react'
import SearchBox from '../SearchBox/SearchBox'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100 sm:hidden block">
  <Link href={'/'} className="btn btn-ghost text-xl">Movie NTY</Link>
</div>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/movies'}>Explore</Link></li>
        <li><Link href={'/tv_shows'}>TV Shows</Link></li>
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost text-xl sm:block hidden">Movie NTY</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/movies'}>Explore</Link></li>
        <li><Link href={'/tv_shows'}>TV Shows</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
 <SearchBox />
  </div>
</div>
</>
  )
}

export default Navbar

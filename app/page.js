"use client"
import React from 'react';
import Link from 'next/link';
const page = () => {
  return (
    <div className="container mt-4">
      <nav className="d-flex">
        <Link  href="/signin">Singin</Link>
        <Link className='mx-3' href="/signup">Signup</Link>
        <Link href="/about">about</Link>
      </nav>
    </div>
  )
}

export default page

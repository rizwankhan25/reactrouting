"use client"
import { User } from '@/utils/UserContext';
import React, { useContext } from 'react'

const page = ({params}) => {
  const [users, setUsers] = useContext(User);
  const user = users[params.index] 
  return (
    <div>
        <h1>{user.username}</h1>
        <h3>{user.email}</h3>
    </div>
  )
}

export default page

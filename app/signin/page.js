"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User } from "@/utils/UserContext";
const page = () => {
  const router = useRouter();
  const [users, setUsers] = useContext(User);
  console.log(users);
  
  const submitHandler = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const isUser = users.filter(
      (user) => user.username === username && user.password === password
    )[0];
    if (isUser) {
      const userIndex = users.findIndex((user) => user === isUser);
      console.log(userIndex);
      router.push(`/signin/${userIndex}`);
    } else {
      alert("User not found");
    }
  };
  return (
    <div className="container mt-5">
      <h3>Signin </h3>
      <form onSubmit={submitHandler} className="w-50">
        <input
          type="text"
          className=" mb-3 form-control"
          placeholder="usename"
        />
       
        <input type="text" className="form-control" placeholder="**********" />
        <button className="btn btn-success">SignUp</button>
      </form>
    </div>
  );
};

export default page;

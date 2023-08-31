"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { User } from "@/utils/UserContext";

const page = () => {
  const router = useRouter();
  const [users, setUsers] = useContext(User);

  const submitHandler = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(username, email, password);
    setUsers([...users, { username, email, password }]);
    localStorage.setItem(
      "users",
      JSON.stringify([...users, { username, email, password }])
    );
    router.push("/signin");
  };
  console.log(users);
  return (
    <div className="mt-5 container">
      <h3>sign up page </h3>
      <form onSubmit={submitHandler} className="w-50">
        <input
          type="text"
          className=" mb-3 form-control"
          placeholder="usename"
        />
        <input
          type="email"
          className="mb-3 form-control"
          placeholder="you@mail.com"
        />
        <input type="text" className="form-control" placeholder="**********" />
        <button className="btn btn-success">SignUp</button>
      </form>
    </div>
  );
};

export default page;

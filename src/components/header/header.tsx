"use client";

import { FC, use } from "react";
import { Link } from "../link/link";
import { UserContext } from "@/context/userProvider/userProvider";
import { LogOut } from "../logOut/logOut";

export const Header: FC = () => {
  const { user } = use(UserContext);

  return (
    <div>
      <h1>TENNIS STORE</h1>
      <Link href="/rackets">rackets</Link>
      <Link href="/">home</Link>
      <Link href="/racketsTop10">TOP10</Link>
      {!user && <Link href="/login">login</Link>}
      {!user && <Link href="/signUp">signUp</Link>}
      {user && <Link href="/admin">admin panel</Link>}
      <p>{user?.login}</p>
      {user && <LogOut />}
    </div>
  );
};

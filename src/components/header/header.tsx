"use client";

import { FC } from "react";
import { Link } from "../link/link";

export const Header: FC = () => {
  return (
    <div>
      <h1>TENNIS STORE</h1>
      <Link href="/rackets">rackets</Link>
      <Link href="/">home</Link>
    </div>
  );
};

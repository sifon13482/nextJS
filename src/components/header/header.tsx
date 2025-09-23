"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const Header: FC = () => {

  const pathname = usePathname()
  console.log(pathname === '/')

  return (
    <div>
      <h1>TENNIS STORE</h1>
      <Link prefetch={false} href="/rackets">
        rackets
      </Link>
      <Link prefetch={false} href="/">
        home
      </Link>
    </div>
  );
};

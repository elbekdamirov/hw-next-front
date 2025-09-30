import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white px-6 py-4 ">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="text-xl font-bold ">
          Logo
        </Link>
        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/users">Users</Link>
          <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

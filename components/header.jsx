import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="doctor-desktop-logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "@mui/material/Link";

const TopMenu = async () => {
  
  const session = await getServerSession(authOptions);
  
  return (
    <div className="flex h-14 bg-orange-200 items-center">
      {
        session ? <Link href="/api/auth/signout" className="ml-4 text-amber-800 font-jetbrains px-2 py-1 hover:bg-amber-800 hover:text-orange-200 border-2 border-amber-800 no-underline transition-all">Sign-Out of {session.user?.name}</Link>
        : <Link href="/api/auth/signin" className="ml-4 text-amber-800 font-jetbrains px-2 py-1 hover:bg-amber-800 hover:text-orange-200 border-2 border-amber-800 no-underline transition-all">Sign-In</Link>
      }
      <div className="flex flex-row-reverse p-2 gap-4 ml-auto">
        <Image
          src={"/img/logo.png"}
          alt="logo"
          width={44}
          height={44}
          className="object-cover"
        />
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>
    </div>
  );
};

export default TopMenu;

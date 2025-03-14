import React from "react";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const TopMenu = async () => {
  
  const session = await getServerSession(authOptions);

  return (
    <div className="flex h-12 bg-slate-800 items-center p-2">
      {
        session ? <TopMenuItem title={`Sign-Out of ${session.user.name}`} pageRef="/api/auth/signout" />
        : <TopMenuItem title={`Sign in`} pageRef="/api/auth/signin" />
      }
      <div className="flex flex-row-reverse p-1 gap-2 ml-auto items-center">
        <Image
          src={"/img/logo.png"}
          alt="logo"
          width={40}
          height={40}
          className="object-cover"
        />
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>
    </div>
  );
};

export default TopMenu;

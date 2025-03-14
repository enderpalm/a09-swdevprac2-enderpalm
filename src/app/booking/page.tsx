import DateReserve from "@/components/DateReserve";
import { MenuItem, Select, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

const UserData = ({topic, val }: { topic: string; val: string }) => {
  return (
    <div className="flex gap-2 items-center font-jetbrains text-sm">
      <span className="bg-slate-300 px-2 py-1 rounded-md text-slate-600">{topic}</span>
      <span>{val}</span>
    </div>
  );
};

const Booking = async () => {
  const session = await getServerSession(authOptions);
  const userData = session
    ? (await getUserProfile(session.user.token)).data
    : undefined;

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-4/5 max-w-[640px] space-y-4 m-4 overflow-hidden flex flex-col">
        {userData && (
          <div className="bg-slate-100 rounded-lg space-y-2 px-10 py-5 flex flex-col justify-center gap-4">
            <h1 className="text-2xl font-bold text-center">User Profile</h1>
            <div className="flex flex-col gap-2 p-4">
              <UserData topic="Name" val={userData.name} />
              <UserData topic="Email" val={userData.email} />
              <UserData topic="Tel" val={userData.tel} />
              <UserData topic="Member Since" val={userData.createdAt} />
            </div>
          </div>
        )}
        <form className="bg-slate-100 rounded-lg space-y-2 px-10 py-5 flex flex-col justify-center gap-4">
          <h1 className="text-2xl font-bold text-center">Venue Reservation</h1>
          <TextField
            name="Name-Lastname"
            label="Name-Lastname"
            variant="standard"
          />
          <TextField
            name="Contact-Number"
            label="Contact-Number"
            variant="standard"
          />
          <Select
            variant="standard"
            name="venue"
            id="venue"
            className="h-8 w-48"
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
          <DateReserve />
          <button
            type="submit"
            className="hover:bg-slate-800 border-2 border-slate-800 transition-colors hover:text-slate-100 font-semibold rounded-lg p-2"
            name="Book Venue"
          >
            Book Venue
          </button>
        </form>
      </div>
    </main>
  );
};

export default Booking;

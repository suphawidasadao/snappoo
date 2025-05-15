"use client";

import React from "react";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";
import Image from "next/image";

function JoinRoom() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <div className="text-sm">
        <Navbar session={session} />
      </div>

      <div className="flex items-start justify-center bg-gradient-to-b from-[#3f064f] to-[#220925] px-4 py-38 min-h-screen">
        <div className="text-center w-full max-w-xl">
          <div className="relative w-120 h-60 mx-auto ">
            <Image
              src="/snappoo.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="bg-[#6e0b63] p-4 rounded-3xl shadow-inner">
            <div className="bg-[#a22086] p-3 rounded-3xl">
              <div className="bg-[#c02ca0] p-2 rounded-3xl">
                <div className="bg-white rounded-xl p-1 flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="ป้อนรหัสเข้าร่วม"
                    className="w-full px-4 py-2 rounded-lg outline-none"
                  />
                  <button className="bg-[#7f3f98] text-white px-3 py-1 rounded-lg hover:bg-[#6b3081] whitespace-nowrap">
                    เข้าร่วม
                  </button>
                  <span className="text-2xl">💰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinRoom;

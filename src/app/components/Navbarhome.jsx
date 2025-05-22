"use client";

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { signOut, useSession } from 'next-auth/react';

function Navbarhome() {

    const { data: session } = useSession(); // Get session data
    const [menuOpen, setMenuOpen] = useState(false); // Toggle state

    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="relative w-8 h-10">
                    <Image
                        src="/snappoo2.svg"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
            <nav className="flex gap-6 items-center text-sm">
                <nav className="hidden md:flex gap-6 items-center text-sm">
                    <a href="#" className="flex items-center gap-1 hover:text-purple-700">
                        <FaHome />
                        หน้าหลัก
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-purple-700">
                        <GiBackwardTime className="text-xl" />กิจกรรม</a>
                </nav>
                <a href='dashboard' className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">+ สร้างข้อสอบ</a>
                {/* Hamburger Icon */}
                <button
                    className="ml-2 p-2 rounded hover:bg-gray-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FaBars size={20} />
                </button>

                {/* Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-14 right-0 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                        <div className="px-4 py-2 text-gray-700 text-sm border-b">
                            {session?.user?.email}
                        </div>
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                        >
                            ออกจากระบบ
                        </button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbarhome
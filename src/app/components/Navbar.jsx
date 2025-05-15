"use client";

import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {
    const { data: session } = useSession(); // Use the useSession hook to get session data

    return (
        <nav className="bg-[#24042d] w-full px-10">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-4 text-white">
                <div className="relative w-8 h-10">
                    <Image
                        src="/logoo.svg"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <ul className="flex gap-6 text-base">
                    {!session ? (
                        <>
                            <li>
                                <Link href="/">เข้าร่วมเกม</Link>
                            </li>
                            <li>
                                <Link href="/register">ลงทะเบียน</Link>
                            </li>
                            <li>
                                <Link href="/login">เข้าสู่ระบบ</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <span className="text-white">{session.user.email.split("@")[0]}</span> {/* Optionally show user's name */}
                            </li>
                            <li>
                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="bg-red-500 text-white border py-2 px-3 rounded-md text-sm my-2"
                                >
                                    ออกจากระบบ
                                </button>

                            </li>
                            <li>
                                <Link href="/home">home</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

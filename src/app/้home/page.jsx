"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';
import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

export default function Home() {

  const { data: session } = useSession(); // Get session data
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state

  return (
    <>
      <Head>
        <title>Dashboard | Quizizz Clone</title>
      </Head>

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
          <a href="#" className="hover:underline">หน้าหลัก</a>
          <a href="#">กิจกรรม</a>
          <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">+ สร้างข้อสอบ</button>
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
                {session?.user?.email?.split('@')[0]}
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

      <main className="max-w-7xl mx-auto p-6">

        {/* Recent Activities */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">กิจกรรมล่าสุด</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="https://img.icons8.com/color/96/china.png" className="h-40 w-full object-cover rounded" />
              <p className="mt-2 font-semibold">Chinese</p>
              <p className="text-xs text-gray-600">10 Qs</p>
              <div className="bg-yellow-300 rounded-full text-black text-xs text-center mt-2 px-2 py-1">ความแม่นยำ 70%</div>
            </div>
          </div>
        </section>

        {/* Templates */}
        <section>
          <h2 className="text-lg font-semibold mb-4">⭐ Templates</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="https://img.icons8.com/color/96/china.png" className="h-40 w-full object-cover rounded" />
              <p className="mt-2 font-semibold">Daily Check-in</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="https://img.icons8.com/color/96/china.png" className="h-40 w-full object-cover rounded" />
              <p className="mt-2 font-semibold">Daily Check-in</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="https://img.icons8.com/color/96/china.png" className="h-40 w-full object-cover rounded" />
              <p className="mt-2 font-semibold">Daily Check-in</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="https://img.icons8.com/color/96/china.png" className="h-40 w-full object-cover rounded" />
              <p className="mt-2 font-semibold">Daily Check-in</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="https://img.icons8.com/color/96/china.png" className="h-40 w-full object-cover rounded" />
              <p className="mt-2 font-semibold">Daily Check-in</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="https://img.icons8.com/color/96/china.png" className="h-40 w-full object-cover rounded" />
              <p className="mt-2 font-semibold">Daily Check-in</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col md:flex-row justify-center items-center gap-4 my-10 text-sm text-gray-500">
      <span>© 2025 Snappoo Inc.</span>
      <div className="flex gap-4 text-xl">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaXTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
      </div>
    </footer>
    </>
  )
}

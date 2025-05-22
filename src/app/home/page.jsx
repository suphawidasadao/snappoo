"use client";

import { useState } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbarhome from '../components/Navbarhome';

export default function Home() {

  return (
    <>
      <div>
        <Navbarhome />
      </div>

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

      <div>
        <Footer />
      </div>
    </>
  )
}

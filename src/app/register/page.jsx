'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

function Registerpage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { data: session, status } = useSession();
  const router = useRouter();

  // ใช้ useEffect เพื่อตรวจสอบ session เมื่อ login แล้ว
  useEffect(() => {
    if (status === "authenticated") {
      // ตรวจสอบ role ถ้า admin redirect ไป dashboard
      if (session?.user?.role === "admin") {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    }
  }, [status, router, session]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please complete all inputs.");
      return;
    }

    try {

      const resCheckUser = await fetch("/api/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const { user } = await resCheckUser.json();
      if (user) {
        setError("User already exists!");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      if (res.ok) {
        // สมัครเสร็จแล้ว ล็อกอินอัตโนมัติ
        const loginRes = await signIn("credentials", {
          redirect: false,
          email: email,
          password: password,
        });

        if (!loginRes.error) {
          // หลังจาก login แล้ว useEffect จะคอยตรวจสอบ session และทำการ redirect ตาม role
          console.log("Logged in successfully");
        } else {
          console.log("Login failed after registration:", loginRes.error);
        }
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error)
    }
  }

  useEffect(() => {
    const numStars = 30;  // จำนวนดาวระยิบ

    // สร้างดาวระยิบ
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star absolute w-[1px] h-[1px] bg-white rounded-full opacity-70 animate-twinkle shadow-[0_0_4px_1px_white]";
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`; // ดาวกระพริบมีความเร็วสุ่ม
      star.style.opacity = `${Math.random() * 0.6 + 0.2}`;
      document.body.appendChild(star);
    }

    // สร้างดาวตก 2 ดวงในทุกๆ 1.5 วินาที
    const shootingStarInterval = setInterval(() => {
      // ดาวตกที่ 1
      const shootingStar1 = document.createElement("div");
      shootingStar1.className = "shooting-star";
      shootingStar1.style.top = `${Math.random() * 50}vh`;
      shootingStar1.style.left = `${Math.random() * 80}vw`;
      document.body.appendChild(shootingStar1);

      // ดาวตกที่ 2 (ตำแหน่งและการเคลื่อนที่แตกต่าง)
      const shootingStar2 = document.createElement("div");
      shootingStar2.className = "shooting-star";
      shootingStar2.style.top = `${Math.random() * 50}vh`;
      shootingStar2.style.left = `${Math.random() * 80 + 10}vw`;  // เลื่อนตำแหน่งเล็กน้อย
      document.body.appendChild(shootingStar2);

      // ลบดาวตกหลังจาก 1.5 วินาที
      setTimeout(() => {
        shootingStar1.remove();
        shootingStar2.remove();
      }, 3500)

    }, 3500);//ทุก ๆ 1.5 วินาที

    // cleanup
    return () => {
      document.querySelectorAll(".star").forEach(star => star.remove());
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div className="text-sm">
      <Navbar />
      <div className="bg-gradient-to-b from-[#3f064f] to-[#220925] flex items-start justify-center px-4 py-48"> {/* ลด padding เพื่อย้ายกล่องให้สูงขึ้น */}
        <div className="bg-white relative z-10 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-[750px] overflow-hidden">

          {/* ฟอร์มล็อกอิน */}
          <div className="w-full md:w-2/3 p-10">
            <h2 className="text-xl font-semibold mb-6">ยินดีต้อนรับเข้าสู่ Snappoo</h2>

            <form className="space-y-3" onSubmit={handleSubmit}>

              {error && (
                <div className="bg-red-500 w-fit text-xs text-white py-1 px-3 rounded-md mt-2 mb-2">
                  {error}
                </div>
              )}

              <input onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full p-2 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 rounded-md"
              />
              <input onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full p-2 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 rounded-md"
              />
              <button className="w-full flex justify-center items-center px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-purple-600 bg-purple-500 text-white">
                <span>ลงทะเบียน</span>
              </button>
            </form>

            <div className="my-3 text-center text-gray-400 text-xs">หรือด้วย</div>

            <div className="space-y-2">
              <button className="w-full flex justify-between items-center px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50" onClick={() =>{signIn("google");}}>
                <span className="flex items-center">
                  ดำเนินการต่อด้วย Google
                </span>
                <span className="text-base">→</span>
              </button>
            </div>

            <p className="text-[10px] text-gray-400 mt-4">
              การลงทะเบียนแสดงว่าคุณยอมรับ <span className="underline">เงื่อนไขในการให้บริการ</span> และ <span className="underline">นโยบายความเป็นส่วนตัว</span>
            </p>

            <p className="text-sm text-center mt-3">
              มีบัญชีอยู่แล้วใช่ไหม? <Link href="login" className="text-purple-600 font-medium hover:underline">เข้าสู่ระบบ</Link>
            </p>
          </div>

          {/* รูปภาพด้านขวา */}
          <div className="w-full md:w-1/3">
            <img src="https://promotions.co.th/wp-content/uploads/2020/07/kids-using-tablet-during-lesson_23-2147848805.jpg" alt="Image" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;

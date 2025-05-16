'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function Loginpage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            // ตรวจสอบบทบาทผู้ใช้และเปลี่ยนเส้นทาง
            if (session?.user?.role === "admin") {
                router.push('/admin/dashboard');
            } else {
                router.push('/');
            }
        }
    }, [status, router, session]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            });

            if (res.error) {
                setError("Invalid credentials");
                return;
            }

            // หลังจาก login สำเร็จ การ redirect จะถูกควบคุมผ่าน useEffect ที่ตรวจสอบ session
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="overflow-hidden h-screen">
        <div className="text-sm">
            <Navbar />

            <div className="bg-[#2e003e] flex items-start justify-center px-4 py-48 overflow-hidden">
                <div className="bg-white relative z-10 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-[750px] overflow-hidden">

                    {/* ฟอร์มเข้าสู่ระบบ */}
                    <div className="w-full md:w-2/3 p-10">
                        <h2 className="text-xl font-semibold mb-6">เข้าสู่ระบบ Snappoo</h2>

                        <form className="space-y-3" onSubmit={handleSubmit}>

                            {error && (
                                <div className="bg-red-500 w-fit text-xs text-white py-1 px-3 rounded-md mt-2 mb-2">
                                    {error}
                                </div>
                            )}

                            <input 
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 rounded-md"
                            />
                            <input 
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 rounded-md"
                            />
                            <button className="w-full flex justify-center items-center px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-purple-600 bg-purple-500 text-white">
                                <span>เข้าสู่ระบบ</span>
                            </button>
                        </form>

                        <div className="my-3 text-center text-gray-400 text-xs">หรือด้วย</div>

                        <div className="space-y-2">
                            <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50" onClick={() =>{signIn("google");}}>
                                <span className="flex items-center">
                                    ดำเนินการต่อด้วย Google
                                </span>
                                <span className="text-base">→</span>
                            </button>
                        </div>

                        <p className="text-sm text-center mt-9">
                            ยังไม่มีบัญชีใช่ไหม? <Link href="register" className="text-purple-600 font-medium hover:underline">สมัครสมาชิก</Link>
                        </p>
                    </div>

                    {/* รูปภาพด้านขวา */}
                    <div className="w-full md:w-1/3">
                        <img src="https://promotions.co.th/wp-content/uploads/2020/07/kids-using-tablet-during-lesson_23-2147848805.jpg" alt="Image" className="w-full h-full object-cover rounded-md" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Loginpage;

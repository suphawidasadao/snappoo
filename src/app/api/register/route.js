import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb"
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await connectMongoDB();

        const newUser = new User({
            email,
            password: hashedPassword,
            role: email === "admin@gmail.com" ? "admin" : "user"
        });

        console.log("✅ Saving User:", newUser);

        await newUser.save();

        return NextResponse.json({ message: "User registered." }, { status: 201 });
        
    } catch(error) {
        return NextResponse.json(
            { message: "เกิดข้อผิดพลาดในการลงทะเบียน", error: error.message },
            { status: 500 }
        );
    }
}
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route"; // ปรับ path ให้ถูกต้องตามโปรเจกต์ของคุณ
import connectMongoDB from "../../../../lib/mongodb";
import Question from "../../../../models/question";
 
export async function GET(request) {
  try {
    await connectMongoDB();
 
    // ดึง session ของ user
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
      return new Response(
        JSON.stringify({ error: "กรุณาเข้าสู่ระบบก่อน" }),
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const quizId = url.searchParams.get("quizId"); // 👈 ดึง quizId จาก URL
 
    if (!quizId) {
      return new Response(
        JSON.stringify({ error: "ต้องระบุ quizId" }),
        { status: 400 }
      );
    }
 
    const creator = session.user.email;
 
    const questions = await Question.find({ creator, quizId });
 
    return new Response(JSON.stringify(questions), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "ไม่สามารถโหลดคำถามได้" }),
      { status: 500 }
    );
  }
}
 
export async function POST(request) {
  await connectMongoDB();
 
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new Response(
      JSON.stringify({ error: "กรุณาเข้าสู่ระบบก่อน" }),
      { status: 401 }
    );
  }
 
  try {
    const {
      questionText,
      choices,
      questionType = "ปรนัย",
      score = 1,
      quizId,
    } = await request.json();
 
    if (
      !questionText ||
      !Array.isArray(choices) ||
      choices.length === 0 ||
      choices.some((choice) => !choice.text) ||
      !quizId
    ) {
      return new Response(
        JSON.stringify({ error: "ข้อมูลคำถามหรือคำตอบไม่ครบถ้วน" }),
        { status: 400 }
      );
    }
 
    const formattedChoices = choices.map(({ text, checked, color }) => ({
      text,
      isCorrect: checked,
      color,
    }));
 
    const newQuestion = new Question({
      questionText,
      choices: formattedChoices,
      questionType,
      score,
      creator: session.user.email,
      quizId,
    });
 
    await newQuestion.save();
 
    return new Response(
      JSON.stringify({ message: "บันทึกคำถามสำเร็จ", id: newQuestion._id }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
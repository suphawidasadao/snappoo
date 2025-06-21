import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import connectMongoDB from "../../../../lib/mongodb";
import Question from "../../../../models/question";
 
export async function GET() {
  await connectMongoDB();
  const session = await getServerSession(authOptions);
 
  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }
 
  try {
    const questions = await Question.find({ creator: session.user.email });
 
    const grouped = {};
    questions.forEach((q) => {
      if (!grouped[q.quizId]) grouped[q.quizId] = 0;
      grouped[q.quizId]++;
    });
 
    const result = Object.entries(grouped).map(([quizId, count]) => ({
      quizId,
      count,
    }));
 
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "เกิดข้อผิดพลาด" }), {
      status: 500,
    });
  }
}
import connectMongoDB from "../../../../../lib/mongodb";
import Question from "../../../../../models/question";
 
export async function POST() {
  await connectMongoDB();
 
  // อัปเดตทุกคำถามให้ published = true
  await Question.updateMany({}, { published: true });
 
  return new Response(JSON.stringify({ message: "Published all questions" }), {
    status: 200,
  });
}
 
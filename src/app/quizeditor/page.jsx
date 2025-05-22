"use client";
 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
 
export default function QuizEditor2() {
  const [questions, setQuestions] = useState([]);
  const [publishing, setPublishing] = useState(false);
  const router = useRouter();
 
  useEffect(() => {
    fetch("/api/questions", { credentials: "include" })
      .then((res) => res.json())
      .then(setQuestions)
      .catch(() => alert("โหลดคำถามล้มเหลว"));
  }, []);
 
 
  async function handlePublish() {
    setPublishing(true);
 
    const res = await fetch("/api/questions/public", {
      method: "POST",
    });
 
    setPublishing(false);
 
    if (res.ok) {
      alert("เผยแพร่ Quiz เรียบร้อย");
      router.push("/"); // เปลี่ยนเป็นหน้าแสดง quiz หรือหน้าอื่นตามต้องการ
    } else {
      alert("เผยแพร่ไม่สำเร็จ");
    }
  }
 
  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <h1>จัดการ Quiz</h1>
      <button onClick={() => router.push("/questioneditor2")}>เพิ่มคำถามใหม่</button>
      <ul>
        {questions.map((q) => (
          <li key={q._id} style={{ marginBottom: 20 }}>
            <strong>{q.questionText}</strong> ({q.questionType}) - ตัวเลือก {q.choices.length} ข้อ -{" "}
            {q.published ? "เผยแพร่แล้ว" : "ยังไม่เผยแพร่"}
 
            <ul>
              {q.choices.map((choice, i) => (
                <li key={i} style={{ color: choice.isCorrect ? "green" : "black" }}>
                  {choice.text} {choice.isCorrect && "(คำตอบถูก)"}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
 
      <button
        onClick={handlePublish}
        disabled={publishing || questions.length === 0}
      >
        {publishing ? "กำลังเผยแพร่..." : "เผยแพร่ Quiz"}
      </button>
    </div>
  );
}
 
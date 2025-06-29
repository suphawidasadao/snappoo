"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuizEditorClient({ quizId }) {
    const router = useRouter();
    const [questions, setQuestions] = useState([]);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!quizId) return;

        fetch(`/api/questions?quizId=${quizId}`, { credentials: "include" })
            .then((res) => res.json())
            .then(setQuestions)
            .catch(() => alert("โหลดคำถามล้มเหลว"));
    }, [quizId]);

    async function handleSave() {
        setSaving(true);
        const res = await fetch("/api/questions/publish", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quizId }),
        });
        setSaving(false);
        if (res.ok) {
            alert("บันทึก Quiz เรียบร้อย");
            router.push("/library");
        } else {
            alert("บันทึกไม่สำเร็จ");
        }
    }

    return (
        <div style={{ maxWidth: 700, margin: "auto" }}>
            <h1>จัดการ Quiz ชุด {quizId}</h1>
            <button onClick={() => router.push(`/questioneditor/${quizId}`)}>
                เพิ่มคำถามใหม่
            </button>
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

            <button onClick={handleSave} disabled={saving || questions.length === 0}>
                {saving ? "กำลังบันทึก..." : "บันทึก Quiz"}
            </button>
        </div>
    );
}

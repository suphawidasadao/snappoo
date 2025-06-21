"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LibraryPage() {
    const [quizGroups, setQuizGroups] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/library", { credentials: "include" })
            .then((res) => res.json())
            .then(setQuizGroups)
            .catch(() => alert("โหลดชุดคำถามล้มเหลว"));
    }, []);

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">ไลบรารีชุดคำถามของคุณ</h1>

            {quizGroups.length === 0 ? (
                <p>ยังไม่มีชุดคำถาม</p>
            ) : (
                <ul className="space-y-4">
                    {quizGroups.map((group, index) => (
                        <li
                            key={index}
                            className="p-4 bg-white rounded shadow flex items-center justify-between"
                        >
                            <div>
                                <h2 className="font-semibold text-lg">ชุดที่ {index + 1}</h2>
                                <p className="text-sm text-gray-500">
                                    quizId: {group.quizId}
                                </p>
                                <p className="text-sm">จำนวนคำถาม: {group.count}</p>
                            </div>
                            <button
                                onClick={() => router.push(`/quizeditor2?quizId=${group.quizId}`)}
                                className="bg-purple-600 text-white px-4 py-2 rounded text-sm"
                            >
                                แก้ไขชุดนี้
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
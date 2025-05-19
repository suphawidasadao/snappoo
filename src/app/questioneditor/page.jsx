"use client";

import React, { useState } from "react";

export default function QuestionEditor() {
  const MAX_CHOICES = 5; // กำหนดจำนวนตัวเลือกสูงสุด

  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([
    { id: 1, text: "", color: "bg-[#3366cc]", checked: false },
    { id: 2, text: "", color: "bg-[#47b8b8]", checked: false },
    { id: 3, text: "", color: "bg-[#f4b942]", checked: true },
    { id: 4, text: "", color: "bg-[#d66565]", checked: true },
  ]);

  const handleChoiceChange = (id, newText) => {
    setChoices((prevChoices) =>
      prevChoices.map((choice) =>
        choice.id === id ? { ...choice, text: newText } : choice
      )
    );
  };

  const handleCheckToggle = (id) => {
    setChoices((prevChoices) =>
      prevChoices.map((choice) =>
        choice.id === id ? { ...choice, checked: !choice.checked } : choice
      )
    );
  };

  const handleDeleteChoice = (id) => {
    setChoices((prev) => prev.filter((choice) => choice.id !== id));
  };

  const handleAddChoice = () => {
    if (choices.length >= MAX_CHOICES) return; // จำกัดเพิ่มสูงสุด
    const newId = choices.length > 0 ? Math.max(...choices.map((c) => c.id)) + 1 : 1;
    setChoices((prev) => [
      ...prev,
      { id: newId, text: "", color: "bg-gray-500", checked: false },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-4 font-sans text-sm">
      {/* Toolbar */}
      <div className="flex justify-between items-center bg-white px-4 py-2 rounded-md shadow mb-4">
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 border rounded text-sm">✔</button>
          <select className="border rounded px-2 py-1 text-sm">
            <option>ปรนัย</option>
          </select>
        </div>

        <div className="flex space-x-2 items-center">
          <button className="font-bold text-sm">A</button>
          <button className="italic text-sm">B</button>
          <button className="underline text-sm">U</button>
          <button className="text-sm">𝑆</button>
          <button className="text-sm">x</button>
          <button className="text-sm">x²</button>
          <button className="text-sm">∑</button>
          <button className="ml-3 text-sm">f(x) แทรกสมการ</button>
        </div>

        <div className="flex items-center space-x-3">
          <select className="border px-2 py-1 text-sm rounded">
            <option>30 วินาที</option>
          </select>
          <button className="bg-purple-600 text-white px-4 py-1 rounded text-sm">
            Save question
          </button>
        </div>
      </div>

      {/* Main Question Box */}
      <div className="bg-[#461A42] rounded-xl px-6 py-6 max-w-6xl mx-auto">
        {/* Question */}
        <div className="relative bg-[#281226] border border-[#5e2d79] rounded-md h-[180px] mb-6 flex items-center justify-center">
          <textarea
            className="bg-transparent text-gray-200 text-lg text-center resize-none w-full h-full p-4 outline-none"
            placeholder="พิมพ์คำถามที่นี่"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </div>

        {/* Choice boxes + ปุ่มเพิ่ม */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {choices.map((choice) => (
            <div
              key={choice.id}
              className={`relative rounded-xl p-4 text-white ${choice.color} flex flex-col items-center text-center text-sm flex-shrink-0`}
              style={{ width: "180px", height: "110px" }}
            >
              {/* ปุ่มถังขยะ */}
              <button
                onClick={() => handleDeleteChoice(choice.id)}
                className="absolute top-2 left-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
                type="button"
                aria-label="ลบคำตอบ"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                  />
                </svg>
              </button>

              {/* Checkbox */}
              <div className="absolute top-2 right-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={choice.checked}
                    onChange={() => handleCheckToggle(choice.id)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-white rounded-full peer-checked:bg-white flex items-center justify-center transition">
                    {choice.checked && (
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </label>
              </div>

              {/* textarea */}
              <textarea
                className="bg-transparent text-white text-sm resize-none w-full outline-none pt-6"
                placeholder="พิมพ์ตัวเลือกคำตอบที่นี่"
                value={choice.text}
                onChange={(e) => handleChoiceChange(choice.id, e.target.value)}
                rows={4}
              />
            </div>
          ))}

          {/* ปุ่มเพิ่ม - แสดงเฉพาะเมื่อ choices ยังไม่เกิน MAX_CHOICES */}
          {choices.length < MAX_CHOICES && (
            <button
              onClick={handleAddChoice}
              className="bg-[#5e2d79] text-white rounded-xl w-[180px] h-[110px] flex items-center justify-center cursor-pointer hover:bg-[#7e57c2] flex-shrink-0"
              type="button"
              aria-label="เพิ่มตัวเลือก"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          )}
        </div>

        {/* ปุ่มประเภทคำตอบ */}
        <div className="mb-2 text-center">
          <button className="bg-black text-white px-4 py-2 rounded text-sm">
            คำตอบเดียวที่ถูกต้อง
          </button>
        </div>
      </div>
    </div>
  );
}

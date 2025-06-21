import React from "react";

const topics = [
  { title: "Numbers", activities: "779.3K activities" },
  { title: "Operations on fractions", activities: "3.9K activities" },
  { title: "Factors and multiples", activities: "15.1K activities" },
  { title: "Concepts in fractions", activities: "895 activities" },
  { title: "Algebra", activities: "122.3K activities" },
  { title: "Linear equations (one variable)", activities: "7.9K activities" },
  { title: "Linear equations (two variables)", activities: "6.6K activities" },
  { title: "Algebraic expressions", activities: "22K activities" },
  { title: "Geometry", activities: "89.7K activities" },
  { title: "Basic geometry", activities: "3.4K activities" },
  { title: "Angles", activities: "265K activities" },
  { title: "Circles and conic sections", activities: "199 activities" },
  { title: "Statistics and probability", activities: "83.2K activities" },
  { title: "Basic statistics", activities: "4.5K activities" },
  { title: "Frequency distribution (including plots)", activities: "8 activities" },
  { title: "Sampling and population", activities: "13.4K activities" },
];

const smallCards = ["Numbers", "Algebra", "Geometry", "Statistics and probability"];

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-6 text-purple-700 text-2xl font-bold">Snappoo</div>
        <div className="px-4">
          <a href="questioneditor" className="w-full mb-6 bg-purple-300 hover:bg-purple-400 text-white py-2 rounded flex items-center justify-center">
            <span className="px-2">➕</span> สร้าง
          </a>
          <nav className="flex flex-col space-y-4 text-gray-700">
            <div className="flex items-center space-x-2 font-semibold text-purple-700">
              <span>🏠</span> <span>สำรวจ</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📚</span> <span>ไลบรารี</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📄</span> <span>รายงาน</span>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="ค้นหาหัวข้อใดๆ"
              className="w-full rounded-full border px-4 pl-10 py-2 focus:outline-none"
            />
            <span className="absolute left-4 top-2.5 text-gray-400">🔍</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg">🔔</span>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">ป้อนรหัส</button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">เข้าคลาสของเพื่อน</button>
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">😺</div>
          </div>
        </div>

        {/* Popular Activities */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">กิจกรรมที่ได้รับความนิยม</h2>
          <div className="flex flex-wrap gap-4">
            {topics.map((topic, index) => {
              const isSmall = smallCards.includes(topic.title);
              return (
                <div
                  key={index}
                  className={`${
                    isSmall ? "w-48 h-48 text-xs" : "w-64 h-48 text-base"
                  } bg-white p-3 rounded shadow hover:shadow-md transition-shadow flex flex-col justify-between`}
                >
                  {/* กล่องสีม่วงที่เป็นวงกลมเฉพาะหัวข้อที่ต้องการ */}
                  {isSmall && (
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                      {/* สามารถใส่ไอคอนหรือข้อความตรงกลางวงกลมได้ */}
                    </div>
                  )}
                  {!isSmall && (
                    <div
                      className={`${
                        isSmall ? "h-20" : "h-24"
                      } w-full bg-gradient-to-br from-purple-100 to-purple-300 rounded mb-2`}
                    />
                  )}

                  <div
                    className={`font-semibold truncate ${
                      isSmall ? "text-xs" : "text-base"
                    }`}
                  >
                    {topic.title}
                  </div>
                  <div
                    className={`truncate ${
                      isSmall ? "text-[10px] text-gray-500" : "text-sm text-gray-600"
                    }`}
                  >
                    {topic.activities}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

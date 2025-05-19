import React from 'react';

const QuestionTypes = () => {
  const groups = [
    {
      heading: '',
      items: [
        { label: 'ปรนัย', color: 'bg-[#8854C0]', icon: (
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.78125 8.71994L0 3.93869L0.751188 3.1875L4.78125 7.21703L11.9988 0L12.75 0.751188L4.78125 8.71994Z" fill="white"/>
          </svg>
        ) },
        { label: 'เติมคำในช่องว่าง', color: 'bg-[#8854C0]', icon:(
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="17" height="7" rx="2.5" fill="#8854C0" stroke="white"/>
            </svg>
        )},
        { label: 'ถามอัตนัย', color: 'bg-[#8854C0]', icon:(
            <svg width="18" height="67" viewBox="0 0 18 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.328 29.784C15.9893 29.784 16.448 29.688 16.704 29.496C16.96 29.2827 17.088 28.8987 17.088 28.344C17.088 28.0027 16.7573 27.7573 16.096 27.608C15.456 27.4373 14.8267 27.352 14.208 27.352C13.3333 27.352 12.5013 27.3627 11.712 27.384L6.848 27.448C6.72 27.448 6.34667 27.448 5.728 27.448C5.13067 27.448 4.71467 27.5653 4.48 27.8C4.24533 28.0347 4.128 28.408 4.128 28.92C4.128 29.2613 4.32 29.496 4.704 29.624C5.088 29.7307 5.73867 29.784 6.656 29.784H15.328Z" fill="white"/>
            <path d="M12.328 35.784C12.9893 35.784 13.448 35.688 13.704 35.496C13.96 35.2827 14.088 34.8987 14.088 34.344C14.088 34.0027 13.7573 33.7573 13.096 33.608C12.456 33.4373 11.8267 33.352 11.208 33.352C10.3333 33.352 9.50133 33.3627 8.712 33.384L3.848 33.448C3.72 33.448 3.34667 33.448 2.728 33.448C2.13067 33.448 1.71467 33.5653 1.48 33.8C1.24533 34.0347 1.128 34.408 1.128 34.92C1.128 35.2613 1.32 35.496 1.704 35.624C2.088 35.7307 2.73867 35.784 3.656 35.784H12.328Z" fill="white"/>
            <path d="M11.328 23.784C11.9893 23.784 12.448 23.688 12.704 23.496C12.96 23.2827 13.088 22.8987 13.088 22.344C13.088 22.0027 12.7573 21.7573 12.096 21.608C11.456 21.4373 10.8267 21.352 10.208 21.352C9.33333 21.352 8.50133 21.3627 7.712 21.384L2.848 21.448C2.72 21.448 2.34667 21.448 1.728 21.448C1.13067 21.448 0.714667 21.5653 0.48 21.8C0.245333 22.0347 0.128 22.408 0.128 22.92C0.128 23.2613 0.32 23.496 0.704 23.624C1.088 23.7307 1.73867 23.784 2.656 23.784H11.328Z" fill="white"/>
            </svg>
        ) },
      ],
    },
    {
      heading: 'การคิดเชิงได้คำตอบ/ขั้นสูง',
      items: [
        { label: 'การแข่งขัน', color: 'bg-[#00A06A]' },
        { label: 'ลากวาง', color: 'bg-[#00A06A]' },
        { label: 'จัดลำดับ', color: 'bg-[#00A06A]' },
        { label: 'จัดหมวดหมู่', color: 'bg-[#00A06A]' },
      ],
    },
    {
      heading: 'คำตอบปลายเปิด',
      items: [
        { label: 'วาด', color: 'bg-[#2D70AE]' },
        { label: 'เปิดสิ้นสุด', color: 'bg-[#2D70AE]' },
        { label: 'แบบสำรวจ', color: 'bg-[#2D70AE]' },
        { label: 'ตอบด้วยเสียง', color: 'bg-[#2D70AE]' },
      ],
    },
    {
      heading: 'คณิตศาสตร์',
      items: [
        { label: 'คำถามจากคณิตศาสตร์', color: 'bg-[#E57C1A]' },
        { label: 'การสร้างกราฟ', color: 'bg-[#E57C1A]' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <div className="bg-white border-b shadow-sm px-6 py-3 flex items-center">
        <button className="text-xl mr-4" aria-label="Back">{'←'}</button>
        <span className="text-base">แบบทดสอบที่ไม่มีชื่อ</span>
        <div className="ml-auto flex items-center space-x-4">
          <button className="text-sm text-gray-400" disabled>
            ดูตัวอย่าง
          </button>
          <button className="bg-purple-600 text-white text-sm px-4 py-1 rounded hover:bg-purple-700">
            สาธารณะ
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center py-14 px-4">
        <div className="bg-white w-full max-w-4xl rounded-xl shadow-md px-14 py-10">
          <h2 className="text-xl font-bold text-center mb-10">สร้างแบบทดสอบใหม่</h2>

          <div className="mb-6">
            <p className="text-sm font-semibold mb-4">เพิ่มคำถามใหม่</p>

            {groups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-6">
                {group.heading && (
                  <p className="text-sm text-gray-500 font-medium mb-2">{group.heading}</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {group.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {/* กล่องที่มีไอคอน */}
                      <div className={`w-6 h-6 flex items-center justify-center ${item.color} rounded`}>
                        {item.icon && <div className="w-4 h-4">{item.icon}</div>}
                      </div>
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionTypes;

import { useState } from "react";

const colors = [
  "#facc15",
  "#fb923c",
  "#a78bfa",
  "#22d3ee",
  "#e9f37a",
  "#eee",
  "black",
];

function Sidebar({ onColorSelect, selectedColor, onAdd }) {
  return (
    <aside className="w-20 bg-white/80 backdrop-blur-sm border-r border-gray-200 flex flex-col items-center py-6 space-y-6">
      <button
        onClick={onAdd}
        className="w-10 h-10 rounded-full bg-black text-white text-2xl flex items-center justify-center hover:scale-110 transition">
        +
      </button>
      <div className="space-y-4">
        {colors.map((color, idx) => (
          <div
            onClick={() => onColorSelect(color)}
            key={idx}
            className="relative w-5 h-5 cursor-pointer rounded-full shadow"
            style={{ backgroundColor: color }}>
            {selectedColor === color && (
              <div className="absolute inset-0 rounded-full ring-2 ring-white ring-offset-2 ring-offset-black"></div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

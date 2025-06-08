function NoteCard({ note, onUpdateText, onTogglePin, onDeleteNode }) {
  return (
    <div
      className="relative rounded-2xl p-6 shadow-xl border border-gray-300/40"
      style={{ backgroundColor: note.color }}>
      <textarea
        value={note.text}
        onChange={(event) => onUpdateText(event.target.value)}
        placeholder="Write Something"
        className="w-full h-32 bg-transparent resize-none focus:outline-none mb-10 font-medium placeholder:text-gray-500 text-gray-800"></textarea>

      <div className="absolute bottom-4 left-4 text-xs text-gray-700/70">
        {note.date}
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={onTogglePin}
          className={`w-8 h-8 rounded-full flex items-center justify-center border-1 border-black shadow text-black  backdrop-blur-sm ${
            note.pinned ? "bg-black" : "bg-white/60"
          }`}>
          {note.pinned ? "⭐" : "✰"}
        </button>
        <button
          onClick={onDeleteNode}
          className="w-8 h-8 rounded-full flex items-center justify-center border-1 border-black text-red-500 hover:text-red-700 bg-white/60 backdrop-blur-sm">
          ❌
        </button>
      </div>
    </div>
  );
}

export default NoteCard;

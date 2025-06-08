import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import Sidebar from "./components/Siderbar";
import Summery from "./components/Summary";
import NoteCard from "./components/NoteCard";

const getLocalNotes = () => {
  const saved = localStorage.getItem("notes-app");
  return saved ? JSON.parse(saved) : [];
};

function App() {
  const [notes, setNotes] = useState(getLocalNotes());
  const [selectedColor, setSelectedColor] = useState("#facc15");
  const [filterPinned, setFilterPinned] = useState(false);
  const [search, setSearch] = useState("");

  const syncToStorage = (updated) => {
    setNotes(updated);
    localStorage.setItem("notes-app", JSON.stringify(updated));
  };

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: "",
      color: selectedColor,
      date: new Date().toLocaleString(),
      pinned: false,
    };
    const updated = [newNote, ...notes];
    syncToStorage(updated);
  };

  const updateText = (id, text) => {
    const updated = notes.map((note) =>
      note.id === id ? { ...note, text } : note
    );
    syncToStorage(updated);
  };

  const togglePinned = (id) => {
    const updated = notes.map((note) =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    );
    syncToStorage(updated);
  };

  const deleteNode = (id) => {
    const updated = notes.filter((note) => note.id !== id);
    syncToStorage(updated);
  };

  const clearAll = () => {
    syncToStorage([]);
  };

  const filterNotes = notes.filter((note) => {
    return (
      note.text.toLowerCase().includes(search.toLowerCase()) &&
      (!filterPinned || note.pinned)
    );
  });

  return (
    <div className="flex flex-col w-screen min-h-screen bg-gradient-to-br from-yellow-50 via-pink-100 to-indigo-100">
      <div className="flex flex-1">
        <Sidebar
          onColorSelect={setSelectedColor}
          selectedColor={selectedColor}
          onAdd={addNote}
        />
        <main className="flex-1 p-10">
          <Header
            clearAll={clearAll}
            filterPinned={setFilterPinned}
            filterPinnedValue={filterPinned}
            setSearch={setSearch}
            searchValue={search}
          />
          <Summery
            total={notes.length}
            pinned={notes.filter((e) => e.pinned).length}
          />
          <NotesGrid>
            {filterNotes
              .sort((a, b) => b.pinned - a.pinned)
              .map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onUpdateText={(text) => updateText(note.id, text)}
                  onTogglePin={() => togglePinned(note.id)}
                  onDeleteNode={() => deleteNode(note.id)}
                />
              ))}
          </NotesGrid>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

function Header({
  clearAll,
  filterPinned,
  setSearch,
  filterPinnedValue,
  searchValue,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
      <h1 className="text-4xl font-extrabold text-indigo-700 drop-shadow">
        📝 Notes
      </h1>
      <div className="flex items-center gap-4">
        <input
          value={searchValue}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search notes..."
          className="px-4 py-2 bg-white text-black border border-gray-300 rounded-xl shadow-sm outline-none"
        />
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            checked={filterPinnedValue}
            onChange={(e) => filterPinned(e.target.checked)}
            type="checkbox"
          />
          Pinned Only
        </label>
        <button
          onClick={clearAll}
          className="text-sm text-red-500 border border-red-500 px-3 py-1 rounded-xl hover:bg-red-100 shadow">
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Header;

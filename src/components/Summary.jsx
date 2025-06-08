function Summery({ total, pinned }) {
  return (
    <div className="mb-6 text-sm text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-2 shadow">
      📋 You have created <strong>{total}</strong> notes, out of which
      <strong> {pinned}</strong> are pinned (marked done).
    </div>
  );
}

export default Summery;

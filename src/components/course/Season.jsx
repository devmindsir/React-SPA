function Season({ outline }) {
  return (
    <>
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">
          سرفصل‌های دوره
        </h3>
        <ul className="space-y-2 list-decimal list-inside text-gray-700">
          {outline.map((item, index) => (
            <li
              key={index}
              className="bg-white p-2 px-4 rounded-lg shadow-sm border">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Season;

function Instructor({ teacher }) {
  return (
    <>
      {/* Instructor Box */}
      <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl mb-10">
        <img
          src={teacher.avatar}
          alt={teacher.name}
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
        <div>
          <h4 className="text-lg font-semibold"> {teacher.name}</h4>
          <p className="text-sm text-gray-500">{teacher.bio}</p>
        </div>
      </div>
    </>
  );
}
export default Instructor;

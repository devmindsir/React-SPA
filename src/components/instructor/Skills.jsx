function Skills({ Skills }) {
  return (
    <>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          مهارت‌ها و تخصص‌ها
        </h3>
        <div className="flex flex-wrap gap-3">
          {Skills.map((skill) => (
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;

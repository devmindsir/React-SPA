import teachers from "../../data/teachers";
import TeacherCard from "../ui/TeacherCard";
function Main() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">مدرسین ما</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;

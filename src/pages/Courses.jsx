import CourseCard from "../components/ui/CourseCard";
import courses from "../data/courses";
const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow w-[92rem] mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          دوره‌های آموزشی
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;

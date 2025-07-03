import CourseCard from "../ui/CourseCard";
import courses from "../../data/courses";
function Course() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">دوره‌های پرطرفدار</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Course;

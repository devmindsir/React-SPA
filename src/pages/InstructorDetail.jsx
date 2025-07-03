import React from "react";
import Profile from "../components/instructor/Profile";
import Skills from "../components/instructor/Skills";
import Courses from "../components/instructor/Courses";
import { useParams } from "react-router-dom";
import teachers from "../data/teachers";
import NotFound from "../pages/NotFound";
import courses from "../data/courses";
const InstructorDetail = () => {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === Number(id));
  const course = courses.find((course) => course.teacherId === Number(id));
  if (!teacher) {
    return <NotFound />;
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Profile teacher={teacher} />
        <Skills Skills={teacher.skills} />
        <Courses course={course} />
      </main>
    </div>
  );
};

export default InstructorDetail;

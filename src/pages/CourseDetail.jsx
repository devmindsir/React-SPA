import React from "react";
import Banner from "../components/course/Banner";
import Information from "../components/course/Information";
import Instructor from "../components/course/Instructor";
import Season from "../components/course/Season";
import Price from "../components/course/Price";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import NotFound from "./NotFound";
const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));
  if (!course) {
    return <NotFound />;
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-md">
          <Banner image={course.image} title={course.title} />
          <div className="p-8">
            <Information
              title={course.title}
              duration={course.duration}
              description={course.description}
              level={course.level}
              teacher={course.teacher.name}
            />
            <Instructor teacher={course.teacher} />
            <Season outline={course.outline} />
            <Price course={course} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;

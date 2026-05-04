import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {BookOpen,ArrowRight,} from "lucide-react";

const CourseList = () => {
  const [courses, setCourses] =
    useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res =
        await api.get("courses/");
      setCourses(res.data);
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-4xl font-bold mb-10">
          Explore Courses
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="text-blue-600" />
              </div>

              <h2 className="text-xl font-bold mb-4">
                {course.title}
              </h2>

              <p className="text-slate-500 mb-6">
                {course.description?.slice(
                  0,
                  100
                )}
                ...
              </p>

              <Link
                to={`/courses/${course.id}`}
                className="flex items-center gap-2 text-blue-600 font-medium"
              >
                View Details
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
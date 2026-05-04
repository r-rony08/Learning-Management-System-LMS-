import { useEffect, useState } from "react";
import api from "../api/axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const CourseDetail = () => {
  const { id } = useParams();

  const [course, setCourse] =
    useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await api.get(
        `courses/${id}/`
      );

      setCourse(res.data);
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    await api.post(
      "enrollments/",
      {
        course: id,
      }
    );

    alert("Enrollment successful");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-5xl mx-auto px-8 py-10">
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white">
            <h1 className="text-4xl font-bold">
              {course.title}
            </h1>

            <p className="mt-3 text-blue-100">
              Learn and improve your skills
            </p>
          </div>

          <div className="p-10">
            <h2 className="text-2xl font-semibold mb-4">
              Course Description
            </h2>

            <p className="text-slate-600 leading-8 mb-8">
              {course.description}
            </p>

            <button
              onClick={handleEnroll}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
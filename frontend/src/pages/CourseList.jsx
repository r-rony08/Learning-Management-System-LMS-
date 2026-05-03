import {
  useEffect,
  useState
} from "react";
import api from "../api/axios";
import {
  Link
} from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] =
    useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses =
    async () => {
      const res =
        await api.get(
          "courses/"
        );

      setCourses(res.data);
    };

  return (
    <div className="p-10">
      {courses.map((course) => (
        <div
          key={course.id}
          className="border p-4 mb-4"
        >
          <h2>
            {course.title}
          </h2>

          <Link
            to={`/courses/${course.id}`}
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
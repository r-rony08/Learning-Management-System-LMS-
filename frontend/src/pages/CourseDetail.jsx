import {
  useEffect,
  useState
} from "react";
import api from "../api/axios";
import {
  useParams
} from "react-router-dom";

const CourseDetail = () => {
  const { id } =
    useParams();

  const [course, setCourse] =
    useState({});

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse =
    async () => {
      const res =
        await api.get(
          `courses/${id}/`
        );

      setCourse(res.data);
    };

  const enroll =
    async () => {
      await api.post(
        "enrollments/",
        {
          course: id
        }
      );

      alert("Enrolled");
    };

  return (
    <div className="p-10">
      <h1>
        {course.title}
      </h1>

      <p>
        {course.description}
      </p>

      <button
        onClick={enroll}
        className="bg-black text-white px-4 py-2"
      >
        Enroll
      </button>
    </div>
  );
};

export default CourseDetail;
import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [data, setData] =
    useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res =
        await api.get(
          "dashboard/summary/"
        );

      setData(res.data);
    };

    fetchData();
  }, []);

  const stats = [
    {
      title: "Users",
      value: data.total_users,
    },
    {
      title: "Courses",
      value: data.total_courses,
    },
    {
      title: "Enrollments",
      value: data.total_enrollments,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          Dashboard
        </h1>

        <p className="text-slate-500 mb-10">
          LMS platform overview
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-8 border hover:shadow-xl transition"
            >
              <p className="text-slate-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-5xl font-bold mt-4 text-slate-800">
                {item.value || 0}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
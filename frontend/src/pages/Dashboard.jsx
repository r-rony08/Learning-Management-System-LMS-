import {
  useEffect,
  useState
} from "react";
import api from "../api/axios";

const Dashboard = () => {
  const [data, setData] =
    useState({});

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard =
    async () => {
      const res =
        await api.get(
          "dashboard/summary/"
        );

      setData(res.data);
    };

  return (
    <div className="p-10 grid grid-cols-3 gap-4">
      <div className="border p-4">
        Users:
        {data.total_users}
      </div>

      <div className="border p-4">
        Courses:
        {data.total_courses}
      </div>

      <div className="border p-4">
        Enrollments:
        {data.total_enrollments}
      </div>
    </div>
  );
};

export default Dashboard;
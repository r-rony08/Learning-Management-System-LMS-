import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("auth/register/", form);

    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Create Account
          </h1>

          <p className="text-slate-500 mt-2">
            Start your learning journey
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            name="username"
            placeholder="Username"
            className="w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <select
            name="role"
            className="w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          >
            <option value="student">
              Student
            </option>

            <option value="instructor">
              Instructor
            </option>
          </select>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition">
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-slate-600">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 ml-2 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
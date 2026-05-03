import {
  useState
} from "react";
import api from "../api/axios";

const Register = () => {
  const [form, setForm] =
    useState({
      username: "",
      email: "",
      password: "",
      role: "student"
    });

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      await api.post(
        "auth/register/",
        form
      );

      alert("Registered");
    };

  return (
    <div className="p-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          className="border p-2 w-full"
          placeholder="Username"
          onChange={(e) =>
            setForm({
              ...form,
              username:
                e.target.value
            })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email:
                e.target.value
            })
          }
        />

        <input
          type="password"
          className="border p-2 w-full"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password:
                e.target.value
            })
          }
        />

        <select
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              role:
                e.target.value
            })
          }
        >
          <option value="student">
            Student
          </option>
          <option value="instructor">
            Instructor
          </option>
        </select>

        <button className="bg-black text-white px-4 py-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
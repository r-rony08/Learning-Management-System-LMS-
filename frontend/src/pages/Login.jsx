import {useState,useContext} from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("auth/login/",
      {
        email,
        password
      }
    );

    login(res.data.access);

    navigate("/dashboard");
  };

  return (
    <div className="p-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password" 
          className="border p-2 w-full"
          placeholder="Password"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button className="bg-black text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
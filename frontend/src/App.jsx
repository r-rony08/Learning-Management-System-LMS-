import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  AuthProvider
} from "./context/AuthContext";

import ProtectedRoute
from "./routes/ProtectedRoute";

import Login
from "./pages/Login";
import Register
from "./pages/Register";
import Profile
from "./pages/Profile";
import CourseList
from "./pages/CourseList";
import CourseDetail
from "./pages/CourseDetail";
import Dashboard
from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/courses"
            element={<CourseList />}
          />

          <Route
            path="/courses/:id"
            element={<CourseDetail />}
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
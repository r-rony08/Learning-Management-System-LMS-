import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  User,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">
          LMS Platform
        </h1>

        <div className="flex items-center gap-8">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/courses"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <BookOpen size={18} />
            Courses
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <User size={18} />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
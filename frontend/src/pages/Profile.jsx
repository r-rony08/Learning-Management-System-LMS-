import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import {User,Mail,Shield,} from "lucide-react";

const Profile = () => {
  const [profile, setProfile] =
    useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const res =
        await api.get(
          "auth/profile/"
        );

      setProfile(res.data);
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-10">
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4">
              <User
                size={40}
                className="text-blue-600"
              />
            </div>

            <h1 className="text-2xl font-bold text-white">
              User Profile
            </h1>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-slate-500" />
              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>
                <p className="font-semibold">
                  {profile.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Shield className="text-slate-500" />
              <div>
                <p className="text-sm text-slate-500">
                  Role
                </p>
                <p className="font-semibold capitalize">
                  {profile.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
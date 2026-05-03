import {
  useEffect,
  useState
} from "react";
import api from "../api/axios";

const Profile = () => {
  const [profile, setProfile] =
    useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile =
    async () => {
      const res =
        await api.get(
          "auth/profile/"
        );

      setProfile(res.data);
    };

  return (
    <div className="p-10">
      <h1>Email:
        {profile.email}
      </h1>

      <h1>Role:
        {profile.role}
      </h1>
    </div>
  );
};

export default Profile;
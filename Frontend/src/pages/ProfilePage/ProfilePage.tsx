import Profile from "../../components/Profile/Profile";
import type { UserProfile } from "../../config/Profile";

const user: UserProfile = {
  name: "Am",
  avatarUrl:
    "https://i.pinimg.com/1200x/eb/2b/6f/eb2b6fa799b4e32738b41bf89abcabe8.jpg",
  stats: [
    { label: "Workouts", value: 161 },
    { label: "Followers", value: 0 },
    { label: "Following", value: 16 },
  ],
};

export default function ProfilePage() {
  return <Profile user={user} onNavigate={(key) => console.log(key)} />;
}

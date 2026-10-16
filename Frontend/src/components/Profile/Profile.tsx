import { ProfileHeader } from "./ProfileHeader";
import { DashboardMenu } from "./DashboardMenu";
import { DASHBOARD_ITEMS } from "../../config/Profile";
import type { DashboardKey, UserProfile } from "../../config/Profile";
import ChartWorkout from "./ChartWorkout";

interface ProfileProps {
  user: UserProfile;
  onNavigate?: (key: DashboardKey) => void;
}

export default function Profile({ user, onNavigate }: ProfileProps) {
  return (
    <div className="bg-black text-white flex flex-col gap-4 ">
      <ProfileHeader {...user} />

      <ChartWorkout />

      <main>
        <DashboardMenu items={DASHBOARD_ITEMS} onSelect={onNavigate} />
      </main>
    </div>
  );
}

import type { UserProfile } from "../../config/Profile";

type ProfileHeaderProps = Pick<UserProfile, "name" | "avatarUrl" | "stats">;

export function ProfileHeader({ name, avatarUrl, stats }: ProfileHeaderProps) {
  return (
    <header className="flex items-center gap-4">
      <img
        src={avatarUrl}
        alt={`${name}'s profile picture`}
        className="size-20 sm:size-28nshrink-0 rounded-full object-cover"
      />

      <div className="flex flex-col gap-2 min-w-0">
        <h2 className="truncate text-2xl font-bold">{name}</h2>
        <ul className="grid grid-cols-3 gap-2 sm:gap-4">
          {stats.map(({ label, value }) => (
            <li key={label} className="min-w-0">
              <p className="truncate text-xs font-extralight text-white/45 sm:text-base">
                {label}
              </p>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

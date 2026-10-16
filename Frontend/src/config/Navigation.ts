export type PageId = "home" | "workout" | "profile";

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
  iconPath: string;
}

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
    iconPath: "M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  },
  {
    id: "workout",
    label: "Workout",
    path: "/workout",
    iconPath: "M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11",
  },
  {
    id: "profile",
    label: "Profile",
    path: "/profile",
    iconPath: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  },
];

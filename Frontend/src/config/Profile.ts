import type { ComponentType } from "react";

// Profile Items
export interface ProfileStat {
  label: string;
  value: number;
}

export interface UserProfile {
  name: string;
  avatarUrl: string;
  stats: ProfileStat[];
}

// Dashboard Items
export type DashboardKey = "statistics" | "exercises" | "measures" | "calendar";

export interface DashboardItem {
  key: DashboardKey;
  label: string;
  icon: ComponentType<{ className?: string }>;
}

import {
  RiBodyScanLine,
  RiBookShelfLine,
  RiCalendar2Line,
  RiLineChartLine,
} from "@remixicon/react";

export const DASHBOARD_ITEMS: readonly DashboardItem[] = [
  { key: "statistics", label: "Statistics", icon: RiLineChartLine },
  { key: "exercises", label: "Exercises", icon: RiBookShelfLine },
  { key: "measures", label: "Measures", icon: RiBodyScanLine },
  { key: "calendar", label: "Calendar", icon: RiCalendar2Line },
] as const;

// Diagram Data Items
export type ChartFilter = "duration" | "volume" | "reps";

export interface WorkoutDataPoint {
  date: string;
  value: number;
}

export const WORKOUT_STATS: Record<ChartFilter, WorkoutDataPoint[]> = {
  reps: [
    { date: "Jul 26", value: 0 },
    { date: "Aug 9", value: 0 },
    { date: "Aug 23", value: 200 },
    { date: "Sep 6", value: 0 },
    { date: "Sep 20", value: 65 },
    { date: "Oct 4", value: 143 }, // Sesuai dengan "Push Day" di gambar
  ],
  duration: [
    { date: "Jul 26", value: 1.5 },
    { date: "Aug 9", value: 1.2 },
    { date: "Aug 23", value: 2 },
    { date: "Sep 6", value: 1 },
    { date: "Sep 20", value: 1.5 },
    { date: "Oct 4", value: 2.5 },
  ],
  volume: [
    { date: "Jul 26", value: 2500 },
    { date: "Aug 9", value: 3200 },
    { date: "Aug 23", value: 4000 },
    { date: "Sep 6", value: 2100 },
    { date: "Sep 20", value: 3800 },
    { date: "Oct 4", value: 4500 },
  ],
};

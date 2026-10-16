import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export interface Routine {
  id: string;
  nameRoutine: string;
  exercises: string[];
}

export interface Workspace {
  idWorkspace: string;
  nameWorkspace: string;
  routines: Routine[];
}

export const Workspaces: Workspace[] = [
  {
    idWorkspace: "WorkspacePrimary",
    nameWorkspace: "Workspace Primary",
    routines: [
      {
        id: "pull-day",
        nameRoutine: "Pull Day",
        exercises: [
          "Pull Up",
          "Wide Pull Up",
          "Lateral Raises (Dumbbell)",
          "Dumbbell Row",
        ],
      },
    ],
  },
];

export const dailyRoutines: Routine[] = [];

export const primaryRoutines: Routine[] = [
  {
    id: "pull-day",
    nameRoutine: "Pull Day",
    exercises: [
      "Pull Up",
      "Wide Pull Up",
      "Lateral Raises (Dumbbell)",
      "Dumbbell Row",
    ],
  },
];

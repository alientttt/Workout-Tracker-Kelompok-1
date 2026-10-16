import type { RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import WorkoutPage from "../pages/WorkoutPage/WorkoutPage";
import NotFound from "../pages/NotFound";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

export const routes: RouteObject[] = [
  {
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage, handle: { title: "Home" } },
      { path: "workout", Component: WorkoutPage, handle: { title: "Workout" } },
      { path: "profile", Component: ProfilePage, handle: { title: "Profile" } },
      { path: "*", Component: NotFound, handle: { title: "Not Found" } },
    ],
  },
];

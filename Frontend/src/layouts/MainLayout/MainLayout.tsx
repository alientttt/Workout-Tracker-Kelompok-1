import { Outlet, useMatches } from "react-router";
import "./MainLayout.css";
import Navbar from "../../components/Navbar/Navbar";
import { RiPencilLine, RiSettings5Line } from "@remixicon/react";

export default function MainLayout() {
  const matches = useMatches();
  const current = matches[matches.length - 1];
  const title =
    (current?.handle as { title?: string } | undefined)?.title ?? "";

  return (
    <div className="layout bg-black text-white min-h-dvh flex flex-col w-full overflow-x-hidden">
      <header className="flex justify-between p-4">
        <a className="font-semibold text-2xl">{title}</a>
        <div className="flex gap-4">
          <a>
            <RiPencilLine />
          </a>
          <a>
            <RiSettings5Line />
          </a>
        </div>
      </header>

      <main className="flex-1 min-w-0 px-4 pb-24">
        <div className="mx-auto w-full max-w-5xl min-w-0">
          <Outlet />
        </div>
      </main>

      <Navbar />
    </div>
  );
}

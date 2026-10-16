import {
  RiAddLargeLine,
  RiAddLine,
  RiArrowDropDownFill,
  RiClipboardLine,
  RiFolderAddLine,
  RiMoreLine,
  RiSearchLine,
} from "@remixicon/react";
import ActionButton from "../../components/ActionButton";
import IconButton from "../../components/IconButton";
import AccordionRoutine from "../../components/Workout/AccordionRoutine";
import { useCallback } from "react";
import { dailyRoutines, Workspaces } from "../../config/TypesWorkout";
import RoutineCard from "../../components/Workout/RoutineCard";

function WorkoutPage() {
  const CountRoutine = Workspaces.routines.length < 1;

  const test = () => {
    console.log("test");
  };

  const handleStartRoutine = useCallback((routineId: string) => {
    // TODO: arahkan ke halaman sesi latihan
    console.log("Start routine:", routineId);
  }, []);

  const handleOpenSectionMenu = useCallback(() => {
    // TODO: tampilkan menu pilihan section
    console.log("Open section menu");
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col gap-4">
        {/* 1 */}
        <ActionButton
          icon={RiAddLargeLine}
          label="Start Empty Workout"
          onClick={test}
        />

        {/* 2 */}
        <section className="flex flex-col gap-2">
          <header className="flex justify-between w-full">
            <h2 className=" font-semibold">Routines</h2>

            <IconButton icon={RiFolderAddLine} label="New Folder" />
          </header>

          <div className="grid w-full grid-cols-2 gap-4">
            <ActionButton icon={RiClipboardLine} label="New Routine" />
            <ActionButton icon={RiSearchLine} label="Explore" />
          </div>
        </section>

        <div className="flex flex-col gap-8">
          {/* 3 */}
          <AccordionRoutine
            nameAccordion="Daily Routines"
            countRoutine={dailyRoutines.length}
            onMoreClick={handleOpenSectionMenu}
          >
            {dailyRoutines.map((routine) => (
              <RoutineCard
                key={routine.id}
                routine={routine}
                onStart={handleStartRoutine}
              />
            ))}

            {CountRoutine && (
              <button
                type="button"
                className="flex w-full justify-center gap-2 rounded-xl border border-dashed border-white/65 p-4 text-blue-500"
              >
                <RiAddLine />
                <span>Add New Routine</span>
              </button>
            )}
          </AccordionRoutine>

          {/* 4 */}
          <div className="flex flex-col gap-2">
            <header className="flex justify-between w-full">
              <div className="flex">
                <button>
                  <RiArrowDropDownFill className="text-white/65" />
                </button>
                <h2 className="text-white/65">Primary Routines (1)</h2>
              </div>
            </header>

            <div className="bg-gray-500/10 p-4 rounded-xl flex flex-col gap-4">
              <div className="flex flex-col">
                <header className="flex justify-between w-full">
                  <div className="flex">
                    <h2 className="font-semibold">Pull Day</h2>
                  </div>

                  <button>
                    <RiMoreLine />
                  </button>
                </header>

                <div>
                  <p className="text-white/65 truncate">
                    Pull Up, Wide Pull Up. Lateral Raises (Dumbell), Dumbell Row
                  </p>
                </div>
              </div>
              <button className="flex gap-2 justify-center w-full bg-blue-500 p-4 rounded-xl">
                <span className="font-semibold text-lg">Start Routine</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPage;

import { memo } from "react";
import { RiMoreLine } from "@remixicon/react";
import IconButton from "../IconButton";
import type { Routine } from "../../config/TypesWorkout";

interface RoutineCardProps {
  routine: Routine;
  onStart: (routineId: string) => void;
}

const RoutineCard = memo(function RoutineCard({
  routine,
  onStart,
}: RoutineCardProps) {
  const { id, nameRoutine, exercises } = routine;

  return (
    <article className="flex flex-col gap-4 rounded-xl bg-gray-500/10 p-4">
      <div className="flex flex-col">
        <header className="flex w-full justify-between">
          <h3 className="font-semibold">{nameRoutine}</h3>
          <IconButton
            icon={RiMoreLine}
            label={`More options for ${nameRoutine}`}
          />
        </header>

        <p className="truncate text-white/65">{exercises.join(", ")}</p>
      </div>

      <button
        type="button"
        onClick={() => onStart(id)}
        className="flex w-full justify-center gap-2 rounded-xl bg-blue-500 p-4"
      >
        <span className="text-lg font-semibold">Start Routine</span>
      </button>
    </article>
  );
});

export default RoutineCard;

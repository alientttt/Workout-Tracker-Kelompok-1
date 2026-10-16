import { RiArrowDropDownFill, RiMoreLine } from "@remixicon/react";
import { useState, type ReactNode } from "react";
import IconButton from "../IconButton";

interface AccordionRoutineProps {
  nameAccordion: string;
  countRoutine: number;
  children: ReactNode;
  defaultOpen?: boolean;
  onMoreClick?: () => void;
}

function AccordionRoutine({
  nameAccordion,
  countRoutine,
  children,
  defaultOpen = true,
  onMoreClick,
}: AccordionRoutineProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <section className="flex flex-col gap-2">
      <header className="flex w-full justify-between">
        <div className="flex">
          <button
            type="button"
            aria-label={
              isOpen ? `Collapse ${nameAccordion}` : `Expand ${nameAccordion}`
            }
            onClick={handleAccordion}
          >
            <RiArrowDropDownFill
              className={`text-white/65 transition-transform ${
                isOpen ? "" : "-rotate-90"
              }`}
            />
          </button>

          <h2 className="text-white/65">
            {nameAccordion} ({countRoutine})
          </h2>
        </div>

        {onMoreClick && (
          <IconButton
            icon={RiMoreLine}
            label={`More Options For ${nameAccordion}`}
            onClick={onMoreClick}
            iconClassName="text-white/65"
          />
        )}
      </header>

      {isOpen && children}
    </section>
  );
}

export default AccordionRoutine;

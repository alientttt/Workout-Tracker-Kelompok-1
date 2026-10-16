import type { IconComponent } from "../config/TypesWorkout";

interface ActionButtonProps {
  icon: IconComponent;
  label: string;
  onClick?: () => void;
}

export default function ActionButton({
  icon: Icon,
  label,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-start gap-2 rounded-xl bg-gray-500/10 p-4 transition-colors hover:bg-gray-500/20"
    >
      <Icon />
      <span>{label}</span>
    </button>
  );
}

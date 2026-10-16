import type { IconComponent } from "../config/TypesWorkout";

interface IconButtonProps {
  icon: IconComponent;
  label: string;
  onClick?: () => void;
  iconClassName?: string;
}

function IconButton({
  icon: Icon,
  label,
  onClick,
  iconClassName,
}: IconButtonProps) {
  return (
    <button type="button" aria-label={label} onClick={onClick}>
      <Icon className={iconClassName} />
    </button>
  );
}

export default IconButton;

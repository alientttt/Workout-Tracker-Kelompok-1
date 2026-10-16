import type { DashboardItem, DashboardKey } from "../../config/Profile";

interface DashboardMenuProps {
  items: readonly DashboardItem[];
  onSelect?: (key: DashboardKey) => void;
}

export function DashboardMenu({ items, onSelect }: DashboardMenuProps) {
  return (
    <section aria-labelledby="dashboard-heading">
      <h3 id="dashboard-heading" className="font-extralight text-white/45">
        Dashboard
      </h3>

      <ul className="grid w-full grid-cols-2 gap-4">
        {items.map(({ key, label, icon: Icon }) => (
          <li key={key}>
            <button
              type="button"
              onClick={() => onSelect?.(key)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-500/10 p-4 font-bold text-white transition-colors hover:bg-gray-500/20"
            >
              <Icon />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

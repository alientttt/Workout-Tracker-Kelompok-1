import { memo } from "react";
import type { ChartFilter } from "../../config/Profile";

interface FilterTabsProps {
  activeFilter: ChartFilter;
  onFilterChange: (filter: ChartFilter) => void;
}

const FILTERS: { id: ChartFilter; label: string }[] = [
  { id: "duration", label: "Duration" },
  { id: "volume", label: "Volume" },
  { id: "reps", label: "Reps" },
];

const FilterTabs = memo(({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    // gap-2 = 8px, mt-4 = 16px
    <nav className="flex items-center gap-2 mt-4">
      {FILTERS.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
            activeFilter === filter.id
              ? "bg-blue-500 text-white"
              : "bg-gray-500/10 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </nav>
  );
});

export default FilterTabs;

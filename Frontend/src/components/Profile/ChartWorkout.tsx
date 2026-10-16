import { useState } from "react";
import type { ChartFilter } from "../../config/Profile";
import { WORKOUT_STATS } from "../../config/Profile";
import FilterTabs from "./FilterTabs";
import BarChart from "./BarChart";
import HeaderDiagram from "./HeaderDiagram";

const ChartWorkout = () => {
  const [activeFilter, setActiveFilter] = useState<ChartFilter>("reps");

  // Mengambil data spesifik berdasarkan filter yang sedang aktif
  const currentData = WORKOUT_STATS[activeFilter];

  return (
    // Pembungkus utama dengan tema gelap (Dark Theme)
    <section className=" bg-black text-white">
      <HeaderDiagram />

      {/* Area Render Diagram */}
      <BarChart data={currentData} filter={activeFilter} />

      {/* Area Tombol Filter */}
      <div className="mt-12">
        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>
    </section>
  );
};

export default ChartWorkout;

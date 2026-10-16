import { useMemo, memo } from "react";
import type { WorkoutDataPoint, ChartFilter } from "../../config/Profile";

interface BarChartProps {
  data: WorkoutDataPoint[];
  filter: ChartFilter;
}

const BarChart = memo(({ data, filter }: BarChartProps) => {
  // useMemo digunakan agar kalkulasi matematika ini tidak diulang
  // kecuali datanya benar-benar berubah.
  const { maxVal, yAxisLabels, unit } = useMemo(() => {
    // Cari nilai tertinggi dari data, jika 0 jadikan 1 agar tidak error dibagi nol
    const highest = Math.max(...data.map((d) => d.value), 1);

    // Pembulatan ke atas untuk batas Y-axis agar bar tertinggi tidak menabrak atap
    let maxRounded: number;

    if (filter === "reps") {
      maxRounded = Math.ceil(highest / 100) * 100; // Kelipatan 100
    } else if (filter === "volume") {
      maxRounded = Math.ceil(highest / 1000) * 1000;
    } else {
      maxRounded = Math.ceil(highest);
    }

    // Membuat 3 titik grid: Atas (Max), Tengah (Max/2), Bawah (0)
    const labels = [maxRounded, maxRounded / 2, 0];

    const unit = filter === "reps" ? "reps" : filter === "volume" ? "kg" : "hr";
    return { maxVal: maxRounded, yAxisLabels: labels, unit };
  }, [data, filter]);

  return (
    // h-48 = 192px untuk area grafik utama
    <div className="relative w-full h-48 mt-8 text-xs text-gray-400">
      {/* Latar Belakang: Garis Grid Horizontal (Y-Axis) */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {yAxisLabels.map((val, index) => (
          <div key={index} className="flex items-center w-full">
            <span className="w-12 text-left">
              {val} {unit}
            </span>
            <div className="flex-1 h-px bg-gray-800 ml-2"></div>
          </div>
        ))}
      </div>

      {/* Sumbu X dan Bar Chart */}
      <div className="absolute inset-0 flex items-end justify-between ml-14 pb-2">
        {data.map((item, index) => {
          // Menghitung persentase tinggi bar (menggunakan Tailwind inline style)
          const heightPercentage = (item.value / maxVal) * 100;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-end h-full w-full group"
            >
              {/* Tooltip Hover (Opsional, muncul saat dihover) */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-2 py-1 rounded text-[10px] mb-2 absolute z-10 -translate-y-8 pointer-events-none">
                {item.value} {unit}
              </div>

              {/* Bar (Elemen Utama) */}
              <div
                className="w-4 sm:w-6 bg-blue-500 rounded-t-sm transition-all duration-700 ease-out hover:brightness-125"
                style={{ height: `${heightPercentage}%` }}
              ></div>

              {/* Label Sumbu X (Tanggal) */}
              <span className="absolute bottom-0 text-[10px] sm:text-xs text-gray-500 whitespace-nowrap translate-y-6">
                {item.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default BarChart;

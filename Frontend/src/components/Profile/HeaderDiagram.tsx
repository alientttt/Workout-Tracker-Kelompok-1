export default function HeaderDiagram() {
  return (
    <header className="flex items-center justify-between mt-6">
      <h2 className="text-xl font-bold flex gap-2 items-center">
        143 Reps
        <span className="font-normal text-gray-500 text-base">this week</span>
      </h2>
      <button className="flex items-center gap-1 text-blue-500 text-sm font-semibold hover:text-blue-400">
        Last 3 months
      </button>
    </header>
  );
}

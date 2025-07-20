import { useState } from "react";

export default function ControlPanel({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) {
  const [showLatency, setShowLatency] = useState(true);

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded shadow-md flex items-center gap-4 text-sm">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={showLatency}
          onChange={() => setShowLatency(!showLatency)}
        />
        Show Latency
      </label>
      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="border px-2 py-1 rounded hover:bg-white hover:text-black"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}
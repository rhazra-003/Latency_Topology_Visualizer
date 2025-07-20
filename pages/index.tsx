import ThreeScene from "@/components/ThreeScene";
import ControlPanel from "@/components/ControlPanel";

export default function Home({ theme, setTheme }: never) {
  return (
    <main className="h-screen w-screen relative">
      <ThreeScene />
      <ControlPanel theme={theme} setTheme={setTheme} />

      <div className="absolute top-4 left-4 bg-black/70 p-3 rounded text-sm text-white space-y-1">
        <div className="font-bold">Legend:</div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-orange-500 rounded-full inline-block" />
          AWS
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-sky-500 rounded-full inline-block" />
          GCP
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block" />
          Azure
        </div>
      </div>
    </main>
  );
}
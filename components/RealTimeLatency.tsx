"use client";
import useRadarLatency from "@/lib/useRadarLatency";
import { useEffect, useState } from "react";

export default function RealTimeLatency({ location = "global" }) {
  const { latencySeries, isLoading } = useRadarLatency(location);
  const [currentLatency, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!isLoading && latencySeries.length > 0) {
      const latestBucket = latencySeries[latencySeries.length - 1];
      setCurrent(latestBucket.median_rtt);
    }
  }, [latencySeries, isLoading]);

  return (
    <div className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded text-sm font-mono">
      {isLoading ? "Loading..." : `RTT: ${currentLatency.toFixed(0)} ms`}
    </div>
  );
}
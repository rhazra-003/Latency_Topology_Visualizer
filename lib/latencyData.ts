import { exchangeServers } from "./exchangeData";

export interface LatencyLink {
  id: string;
  from: string;
  to: string;
  latencyMs: number;
}

export function generateMockLatency(): LatencyLink[] {
  const links: LatencyLink[] = [];

  for (let i = 0; i < exchangeServers.length; i++) {
    for (let j = i + 1; j < exchangeServers.length; j++) {
      const latency = Math.floor(Math.random() * 300); // 0-300ms
      links.push({
        id: `${exchangeServers[i].id}-${exchangeServers[j].id}`,
        from: exchangeServers[i].id,
        to: exchangeServers[j].id,
        latencyMs: latency,
      });
    }
  }

  return links;

}
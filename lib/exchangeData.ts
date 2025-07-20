export type CloudProvider = "AWS" | "GCP" | "Azure";

export interface ExchangeServer {
  id: string;
  name: string;
  provider: CloudProvider;
  coordinates: [number, number];
  location: string;
}

export const exchangeServers: ExchangeServer[] = [
  {
    id: "binance-tokyo",
    name: "Binance",
    provider: "AWS",
    coordinates: [35.6895, 139.6917], // Tokyo
    location: "Tokyo, Japan",
  },
  {
    id: "okx-singapore",
    name: "OKX",
    provider: "GCP",
    coordinates: [1.3521, 103.8198], // Singapore
    location: "Singapore",
  },
  {
    id: "bybit-frankfurt",
    name: "Bybit",
    provider: "Azure",
    coordinates: [50.1109, 8.6821], // Frankfurt
    location: "Frankfurt, Germany",
  },
];

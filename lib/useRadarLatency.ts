import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function useRadarLatency(location = "global") {
  const now = Math.floor(Date.now() / 1000);
  const { data, error } = useSWR(
    `/api/radarLatency?since=${now - 600}&until=${now}&location=${location}`,
    fetcher,
    { refreshInterval: 5000 }
  );

  return {
    latencySeries: data?.result?.series || [],
    isLoading: !data && !error,
    isError: error,
  };
}
import type { NextApiRequest, NextApiResponse } from "next";

const API_TOKEN = process.env.CF_API_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { dataset = "latency", since, until, location = "global" } = req.query;

  const url = new URL(`https://api.cloudflare.com/client/v4/radar/${dataset}/timeseries`);
  url.searchParams.set("interval", "300"); 
  if (since) url.searchParams.set("since", since as string);
  if (until) url.searchParams.set("until", until as string);
  if (location) url.searchParams.set("location", location as string);

  const response = await fetch(url.href, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });

  const payload = await response.json();
  res.status(response.ok ? 200 : 500).json(payload);

}
import type { WatchCategory, WatchSeed } from "@/types/watch";

export function getWatchCategory(cost: number): WatchCategory {
  if (cost < 200) return "ECONOMIC";
  if (cost < 1000) return "EXECUTIVE";
  if (cost < 5000) return "EXCLUSIVE";
  if (cost < 15000) return "LUXURY";
  return "MULTIMILLIONAIRE";
}

export function attachCategory(watch: WatchSeed) {
  return {
    ...watch,
    category: getWatchCategory(watch.cost)
  };
}

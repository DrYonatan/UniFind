import Demographics from "@/app/components/university-metrics/demographics";
import Weather from "@/app/components/university-metrics/weather";
import { UniversityMetric } from "@/app/types/university-metric";

export const universityMetrics: UniversityMetric[] = [
  {
    label: "Demographics",
    component: Demographics,
  },
  {
    label: "Weather",
    component: Weather,
  },
] as const;

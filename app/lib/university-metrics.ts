import Demographics from "@/app/components/university-metrics/demographics";
import { UniversityMetric } from "@/app/types/university-metric";

export const universityMetrics: UniversityMetric[] = [
  {
    label: "Demographics",
    component: Demographics,
  },
  // {
  //   label: "Weather",
  //   component: null,
  // },
  // {
  //   label: "Student Life",
  //   component: null,
  // },
  // {
  //   label: "Rankings",
  //   component: null,
  // },
] as const;

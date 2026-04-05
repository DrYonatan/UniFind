import { University } from "@/app/types/university";

export interface UniversityMetric {
  label: string;
  component: React.ComponentType<{ university: University }>;
}

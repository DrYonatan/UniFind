import { Degree } from "@/app/types/degree";

export interface University {
  id: string;
  externalId?: string;
  name: string;
  country: string;
  degrees: Degree[];
  studentCount?: number;
}

import { Degree } from "@/app/types/degree";
import { Demographics } from "@/app/types/demographics";

export interface University {
  id: string;
  externalId?: string;
  name: string;
  country: string;
  degrees: Degree[];
  demographics?: Demographics;
}

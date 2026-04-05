import { Degree } from "@/app/types/degree";
import { User } from "@/app/types/user";

export interface University {
  id: string;
  externalId?: string;
  name: string;
  country: string;
  degrees: Degree[];
  students: User[];
}

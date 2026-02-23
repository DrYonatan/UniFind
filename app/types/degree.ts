import { User } from "@/app/types/user";

export interface Degree {
  id: string;
  name: string;
  students: User[];
}

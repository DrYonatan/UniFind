import { Hobby } from "@/app/types/hobby";

export interface Demographics {
  totalStudents: number;
  averageAge: number;
  averagePsychometry: number;
  topHobbies: Hobby[];
}

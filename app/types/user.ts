import { Hobby } from "@/app/types/hobby";
import { University } from "./university";

export interface User {
  id: string;
  username: string;
  email: string;
  attendedUniversity?: University;
  psycometry?: number;
  birthYear?: number;
  joinedAt: Date;
  hobbies?: Hobby[];
}

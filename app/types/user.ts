import { University } from "./university";

export interface User {
  id: string;
  username: string;
  email: string;
  attendedUniversity?: string;
  joinedAt: Date;
}

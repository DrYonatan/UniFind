import { University } from "./university";

export interface User {
    id: string;
    username: string;
    email: string;
    attendedUniversity: University | null;
}
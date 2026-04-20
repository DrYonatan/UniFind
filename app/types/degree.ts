export interface Degree {
  id: string;
  name: string;
  type: "Bachelor's" | "Master's" | "Doctorate" | "Other";
  studentCount?: number;
}

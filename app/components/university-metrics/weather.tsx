import { University } from "@/app/types/university";

export default function Weather({ university }: { university: University }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Weather Overview
      </h2>
      <p>{university.country}</p>
    </div>
  );
}

import { requireUser } from "@/app/lib/auth";
import DetailsForm from "@/app/components/details-form";
import { Hobby } from "@/app/types/hobby";
import { getHobbies } from "@/app/lib/hobbies";

export default async function DetailsFormPage() {
  const user = await requireUser();

  const availableHobbies: Hobby[] = await getHobbies();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <DetailsForm user={user} availableHobbies={availableHobbies} />
    </div>
  );
}

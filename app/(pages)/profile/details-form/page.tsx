import { requireUser } from "@/app/lib/auth";
import DetailsForm from "@/app/components/details-form";

export default async function DetailsFormPage() {
  const user = await requireUser();

  const hobbies = ["Reading", "Traveling"];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <DetailsForm user={user} hobbies={hobbies} />
    </div>
  );
}

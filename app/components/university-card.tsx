import Link from "next/link";

type UniversityCardProps = {
  id: string;
  title: string;
  description: string;
};

export default function UniversityCard({
  id,
  title,
  description,
}: UniversityCardProps) {
  return (
    <Link
      href={`/browse/${id}`}
      className={`flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md w-full md:w-100 cursor-pointer hover:scale-105 duration-200 slide-in-up`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </Link>
  );
}

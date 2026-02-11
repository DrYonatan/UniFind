type UniversityCardProps = {
  title: string;
  description: string;
};

export default function UniversityCard({
  title,
  description,
}: UniversityCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md w-full md:w-100 slide-in-up`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

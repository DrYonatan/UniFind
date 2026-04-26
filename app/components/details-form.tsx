"use client";

import { useState } from "react";
import Link from "next/link";
import { saveUserDetails } from "@/app/actions/save-user-details";
import { User } from "@/app/types/user";
import { Hobby } from "@/app/types/hobby";

type Props = {
  user: User;
  availableHobbies: Hobby[];
};

export default function DetailsForm({ user, availableHobbies }: Props) {
  const [birthYear, setBirthYear] = useState(user.birthYear ?? "");
  const [selectedHobbies, setSelectedHobbies] = useState<Hobby[]>(
    user.hobbies ?? [],
  );

  const [query, setQuery] = useState("");

  const filteredHobbies = availableHobbies.filter((hobby: Hobby) =>
    hobby.name.toLowerCase().includes(query.toLowerCase()),
  );

  const addHobby = (hobby: Hobby) => {
    if (!selectedHobbies.includes(hobby)) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
    setQuery("");
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    await saveUserDetails(Number(birthYear), selectedHobbies);
  };

  return (
    <form
      className="flex flex-col gap-6 w-150 bg-gray-100 p-6 rounded-xl"
      onSubmit={handleSubmit}
    >
      {/* Birth Year */}
      <h1 className="font-bold text-xl self-center">Details</h1>
      <div>
        <label className="block mb-1">Birth Year</label>
        <input
          type="number"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      {/* University */}
      <div>
        <label className="block mb-1">University</label>
        {user.attendedUniversity ? (
          <Link
            href={`/browse/${user.attendedUniversity.externalId}`}
            className="text-blue-600 underline"
          >
            {user.attendedUniversity.name}
          </Link>
        ) : (
          <Link href="/browse" className="text-blue-600 underline">
            Browse universities
          </Link>
        )}
      </div>

      {/* Hobbies */}
      <div className="relative">
        <label className="block mb-1">Hobbies</label>

        {/* Search input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search or add a hobby"
          className="border p-2 w-full"
        />

        {/* Dropdown */}
        {query && (
          <div className="absolute left-0 right-0 top-full z-10 mt-1 border bg-white shadow-lg max-h-40 overflow-y-auto">
            {filteredHobbies.length > 0 ? (
              filteredHobbies.map((hobby) => (
                <div
                  key={hobby.id}
                  onClick={() => addHobby(hobby)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {hobby.name}
                </div>
              ))
            ) : (
              <div
                onClick={() => addHobby({ id: "", name: query })}
                className="p-2 cursor-pointer hover:bg-gray-100 text-blue-600"
              >
                Add "{query}"
              </div>
            )}
          </div>
        )}

        {/* Selected hobbies */}
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedHobbies.map((hobby) => (
            <span
              key={hobby.id}
              className="px-2 py-1 bg-blue-500 text-white rounded cursor-pointer"
              onClick={() =>
                setSelectedHobbies((prev) =>
                  prev.filter((h) => h.id !== hobby.id),
                )
              }
            >
              {hobby.name} ✕
            </span>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-black text-white p-2 hover:cursor-pointer hover:bg-gray-600 ease-in-out duration-200"
      >
        Save
      </button>
    </form>
  );
}

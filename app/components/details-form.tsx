"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  user: any;
  hobbies: string[];
};

export default function DetailsForm({ user, hobbies }: Props) {
  const [birthYear, setBirthYear] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [newHobby, setNewHobby] = useState("");

  const [query, setQuery] = useState("");

  const filteredHobbies = hobbies.filter((h) =>
    h.toLowerCase().includes(query.toLowerCase()),
  );

  const addHobby = (hobby: string) => {
    if (!selectedHobbies.includes(hobby)) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
    setQuery("");
  };

  const toggleHobby = (hobby: string) => {
    setSelectedHobbies((prev) =>
      prev.includes(hobby) ? prev.filter((h) => h !== hobby) : [...prev, hobby],
    );
  };

  return (
    <form className="flex flex-col gap-6 w-150 bg-gray-100 p-6 rounded-xl">
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
      <div>
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
          <div className="border mt-1 max-h-40 overflow-y-auto">
            {filteredHobbies.length > 0 ? (
              filteredHobbies.map((hobby) => (
                <div
                  key={hobby}
                  onClick={() => addHobby(hobby)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {hobby}
                </div>
              ))
            ) : (
              <div
                onClick={() => addHobby(query)}
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
              key={hobby}
              className="px-2 py-1 bg-blue-500 text-white rounded cursor-pointer"
              onClick={() =>
                setSelectedHobbies((prev) => prev.filter((h) => h !== hobby))
              }
            >
              {hobby} ✕
            </span>
          ))}
        </div>
      </div>

      <button type="submit" className="bg-black text-white p-2">
        Save
      </button>
    </form>
  );
}

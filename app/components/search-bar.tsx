"use client";

import { useEffect, useState } from "react";

type SearchBarProps = {
  value?: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
  className?: string;
};

export default function SearchBar({
  value = "",
  onSearch,
  placeholder = "Search...",
  debounceMs = 300,
  className = "",
}: SearchBarProps) {
  const [input, setInput] = useState(value);

  // Keep internal state in sync if parent changes value
  useEffect(() => {
    setInput(value);
  }, []);

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(input.trim());
    }, debounceMs);

    return () => clearTimeout(timeout);
  }, [input, debounceMs]);

  return (
    <input
      type="search"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={placeholder}
      className={`
        w-full rounded-md border border-gray-300 bg-white
        px-3 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 h-8
        ${className}
      `}
    />
  );
}

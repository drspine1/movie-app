

import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(query), 700);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (debounced) onSearch(debounced);
  }, [debounced]);

  return (
    <div className="my-6 text-center">
      <input
        type="text"
        placeholder="Search for trending movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-3/4 md:w-1/2 p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
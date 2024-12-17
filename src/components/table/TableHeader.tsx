import React from 'react';
import { Search, Filter } from 'lucide-react';

interface TableHeaderProps {
  onSearch: (value: string) => void;
}

export function TableHeader({ onSearch }: TableHeaderProps) {
  return (
    <div className="mb-4 flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <button className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
        <Filter className="h-4 w-4" />
        Filters
      </button>
    </div>
  );
}
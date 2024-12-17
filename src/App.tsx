import React from 'react';
import { DataTable } from './components/table/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { alertRules, AlertRule } from './data/mockData';

const columns: ColumnDef<AlertRule>[] = [
  {
    accessorKey: "name",
    header: "Alert name"
  },
  {
    accessorKey: "queueLimit",
    header: "Queue limit"
  },
  {
    accessorKey: "executionLimit",
    header: "Execution limit"
  },
  {
    accessorKey: "spillageLimit",
    header: "Spillage limit"
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1">
        {row.original.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
          >
            {tag}
          </span>
        ))}
      </div>
    )
  },
  {
    accessorKey: "warehouses",
    header: "Warehouses",
    cell: ({ row }) => (
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        {row.original.warehouses}
      </span>
    )
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Alert Rules</h1>
          <DataTable columns={columns} data={alertRules} />
        </div>
      </div>
    </div>
  );
}

export default App;
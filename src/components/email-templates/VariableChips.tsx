"use client";

import { VARIABLES } from "./types";

interface VariableChipsProps {
  onVariableClick: (variable: string) => void;
}

export function VariableChips({ onVariableClick }: VariableChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {VARIABLES.map((variable) => (
        <button
          key={variable}
          onClick={() => onVariableClick(variable)}
          className="px-3 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
        >
          {variable}
        </button>
      ))}
    </div>
  );
}

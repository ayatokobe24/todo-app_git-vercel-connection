"use client";

import type { TodoFilterValue } from "@/lib/types";

const OPTIONS: Array<[TodoFilterValue, string]> = [
  ["all", "すべて"],
  ["active", "未完了"],
  ["completed", "完了"],
];

export default function TodoFilter({
  value,
  onChange,
}: {
  value: TodoFilterValue;
  onChange: (value: TodoFilterValue) => void;
}) {
  return (
    <div className="filters" role="group" aria-label="完了状態で絞り込み">
      {OPTIONS.map(([id, label]) => (
        <button
          key={id}
          type="button"
          className={value === id ? "is-active" : ""}
          onClick={() => onChange(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

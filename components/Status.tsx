import React from "react";

interface Props {
  label: string;
  value: string;
}

export default function Status({ label, value }: Props) {
  return (
    <div className="flex items-center gap-28">
      <p className="flex-1 text-sm text-zinc-700">{label}</p>
      <p className="font-semibold text-zinc-600">{value}</p>
    </div>
  );
}
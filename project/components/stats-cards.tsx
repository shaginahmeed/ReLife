"use client";

import { User } from "lucide-react";

const stats = [
  { icon: User, label: "Current Weight", value: "32kg" },
  { icon: User, label: "Current Height", value: "4ft" },
  { icon: User, label: "Workout Target", value: "56" },
  { icon: User, label: "Workout Completed", value: "1" },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#141517] p-4 rounded-lg border-l-4 border-yellow-400"
        >
          <div className="flex items-center gap-3">
            <stat.icon className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
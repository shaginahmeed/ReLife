"use client";

import { Calculator, Dumbbell, FileText, Home, Music, Star } from "lucide-react";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { icon: Calculator, label: "Calculator", path: "/calculator" },
  { icon: Dumbbell, label: "Workouts", path: "/" },
  { icon: FileText, label: "Notes", path: "/notes" },
  { icon: Home, label: "Home", path: "/home" },
  { icon: Music, label: "Music", path: "/music" },
  { icon: Star, label: "Favorites", path: "/favorites" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20 bg-[#1a1b1e] border-r border-gray-800">
      <div className="h-full flex flex-col items-center py-4">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className={`w-full p-7 flex flex-col items-center transition-colors ${
              pathname === item.path ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
            }`}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </div>
    </aside>
  );
}
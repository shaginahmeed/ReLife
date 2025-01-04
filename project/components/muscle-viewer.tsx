"use client";

import Image from "next/image";

interface MuscleViewerProps {
  selectedMuscle: string;
}

export default function MuscleViewer({ selectedMuscle }: MuscleViewerProps) {
  const muscleImages = {
    chest: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop",
    back: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=500&h=500&fit=crop",
    legs: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=500&h=500&fit=crop",
    shoulders: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=500&h=500&fit=crop",
    arms: "https://images.unsplash.com/photo-1590507621108-433608c97823?w=500&h=500&fit=crop",
    core: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
  };

  return (
    <div className="relative w-full aspect-square max-w-md">
      <Image
        src={muscleImages[selectedMuscle as keyof typeof muscleImages]}
        alt={`${selectedMuscle} muscle group`}
        fill
        className="object-cover rounded-lg"
        priority
      />
    </div>
  );
}
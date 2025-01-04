"use client";

interface MuscleModelProps {
  selectedMuscle: string;
}

const muscleImages: Record<string, string> = {
  arms: "/muscles/arms.png",
  back: "/muscles/back.png",
  chest: "/muscles/chest.png",
  core: "/muscles/core.png",
  legs: "/muscles/legs.png",
  shoulders: "/muscles/shoulders.png"
};

export function MuscleModel({ selectedMuscle }: MuscleModelProps) {
  return (
    <div className="relative w-full max-w-lg aspect-square">
      <img
        src={muscleImages[selectedMuscle]}
        alt={`${selectedMuscle} muscle anatomy`}
        className="w-full h-full object-contain"
      />
    </div>
  );
}






// "use client";

// interface MuscleModelProps {
//   selectedMuscle: string;
// }

// const muscleImages: Record<string, string> = {
//   arms: "/muscles/arms.png",
//   back: "/muscles/back.png",
//   chest: "/muscles/chest.png",
//   core: "/muscles/core.png",
//   forearm: "/muscles/forearm.png",
//   shoulders: "/muscles/shoulders.png"
// };

// export function MuscleModel({ selectedMuscle }: MuscleModelProps) {
//   return (
//     <div className="relative w-full max-w-lg aspect-square">
//       <img
//         src={muscleImages[selectedMuscle]}
//         alt={`${selectedMuscle} muscle anatomy`}
//         className="w-full h-full object-contain"
//       />
//     </div>
//   );
// }

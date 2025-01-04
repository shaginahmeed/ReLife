"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sidebar } from "@/components/sidebar";
import { StatsCards } from "@/components/stats-cards";
import { MuscleModel } from "@/components/muscle-model";
import ExerciseList from "@/components/exercise-list";

export default function MuscleBuilder() {
  const [selectedMuscle, setSelectedMuscle] = useState("chest");

  return (
    <div className="flex min-h-screen bg-[#1a1b1e]">
      <Sidebar />
      <main className="flex-1">
        <header className="px-6 py-4 flex justify-between items-center">
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-400" />
            <span className="text-white">benrobo</span>
          </div>
          <button className="ml-4 px-4 py-2 bg-yellow-400 text-black rounded-md font-medium">
            Logout
          </button>
        </header>

        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Muscle Builder</h1>
            <p className="text-gray-400">Build and Heal your Muscle.</p>
          </div>

          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <MuscleModel selectedMuscle={selectedMuscle} />
            </div>
            <div className="flex flex-col justify-center items-end">
              <div className="w-full max-w-xs">
                <h2 className="text-white text-xl mb-4">Select Muscle Building</h2>
                <Select value={selectedMuscle} onValueChange={setSelectedMuscle}>
                  <SelectTrigger className="w-full bg-transparent border-gray-700 text-white">
                    <SelectValue placeholder="Select muscle group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chest">CHEST</SelectItem>
                    <SelectItem value="back">BACK</SelectItem>
                    <SelectItem value="legs">LEGS</SelectItem>
                    <SelectItem value="shoulders">SHOULDERS</SelectItem>
                    <SelectItem value="arms">ARMS</SelectItem>
                    <SelectItem value="core">CORE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <ExerciseList selectedMuscle={selectedMuscle} />
        </div>
      </main>
    </div>
  );
}












// "use client";

// import { useState } from "react";
// import { User } from "lucide-react";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Sidebar } from "@/components/sidebar";
// import { StatsCards } from "@/components/stats-cards";
// import { MuscleModel } from "@/components/muscle-model";
// import ExerciseList from "@/components/exercise-list";

// export default function MuscleBuilder() {
//   const [selectedMuscle, setSelectedMuscle] = useState("chest");

//   return (
//     <div className="flex min-h-screen bg-[#1a1b1e]">
//       <Sidebar />
//       <main className="flex-1">
//         <header className="px-6 py-4 flex justify-between items-center">
//           <div className="flex-1" />
//           <div className="flex items-center gap-2">
//             <User className="w-5 h-5 text-gray-400" />
//             <span className="text-white">benrobo</span>
//           </div>
//           <button className="ml-4 px-4 py-2 bg-yellow-400 text-black rounded-md font-medium">
//             Logout
//           </button>
//         </header>

//         <div className="px-6 py-8">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-white mb-2">Muscle Builder</h1>
//             <p className="text-gray-400">Build and Heal your Muscle.</p>
//           </div>

//           <StatsCards />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
//             <div className="flex items-center justify-center">
//               <MuscleModel selectedMuscle={selectedMuscle} />
//             </div>
//             <div className="flex flex-col justify-center items-end">
//               <div className="w-full max-w-xs">
//                 <h2 className="text-white text-xl mb-4">Select Muscle Building</h2>
//                 <Select value={selectedMuscle} onValueChange={setSelectedMuscle}>
//                   <SelectTrigger className="w-full bg-transparent border-gray-700 text-white">
//                     <SelectValue placeholder="Select muscle group" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="chest">CHEST</SelectItem>
//                     <SelectItem value="back">BACK</SelectItem>
//                     <SelectItem value="legs">FOREARM</SelectItem>
//                     <SelectItem value="shoulders">SHOULDERS</SelectItem>
//                     <SelectItem value="arms">ARMS</SelectItem>
//                     <SelectItem value="core">CORE</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>

//           {/* Add MuscleViewer to display the image */}
//           <div className="flex justify-center mt-8">
//             <MuscleModel selectedMuscle={selectedMuscle} />
//           </div>

//           <ExerciseList selectedMuscle={selectedMuscle} />
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell } from "lucide-react";

interface Exercise {
  title: string;
  description: string;
  sets: number;
  reps: string;
  image: string;
}

const exercises: Record<string, Exercise[]> = {
  chest: [
    {
      title: "Bench Press",
      description: "Classic chest exercise for building upper body strength",
      sets: 4,
      reps: "8-12",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      title: "Incline Dumbbell Press",
      description: "Targets upper chest muscles",
      sets: 3,
      reps: "10-15",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop"
    },
    {
      title: "Push-Ups",
      description: "Bodyweight exercise for chest and core",
      sets: 4,
      reps: "15-20",
      image: "https://images.unsplash.com/photo-1598971639058-999f6d0c55c8?w=400&h=300&fit=crop"
    }
  ],
  arms: [
    {
      title: "Bicep Curls",
      description: "Isolation exercise for biceps",
      sets: 3,
      reps: "12-15",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop"
    }
  ],
  // Add exercises for other muscle groups...
};

interface ExerciseListProps {
  selectedMuscle: string;
}

export default function ExerciseList({ selectedMuscle }: ExerciseListProps) {
  const currentExercises = exercises[selectedMuscle] || [];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-6">Recommended Exercises</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentExercises.map((exercise, index) => (
          <Card key={index} className="bg-[#141517] border-gray-800 overflow-hidden">
            <div className="relative h-48">
              <img
                src={exercise.image}
                alt={exercise.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Dumbbell className="w-5 h-5 text-yellow-400" />
                {exercise.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {exercise.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-400">Sets</p>
                  <p className="font-bold text-white">{exercise.sets}</p>
                </div>
                <div>
                  <p className="text-gray-400">Reps</p>
                  <p className="font-bold text-white">{exercise.reps}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
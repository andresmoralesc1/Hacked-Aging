"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Brain, Utensils, Battery, Clock } from "lucide-react";

const assessments = [
  {
    id: "longevity",
    title: "Longevity Score",
    description: "Comprehensive assessment of your health habits and lifestyle factors that impact longevity",
    icon: <Activity className="h-8 w-8" />,
    duration: "5 min",
    questions: 8,
    categories: ["Exercise", "Nutrition", "Sleep", "Social", "Stress"],
    gradient: "from-blue-500 to-emerald-500"
  },
  {
    id: "recovery",
    title: "Recovery Assessment",
    description: "Evaluate your body's ability to recover from physical and mental stress",
    icon: <Battery className="h-8 w-8" />,
    duration: "4 min",
    questions: 7,
    categories: ["Sleep Quality", "Physical Recovery", "Mental Recovery", "Nutrition"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "sleep",
    title: "Sleep Quality",
    description: "Deep dive into your sleep patterns, quality, and optimization opportunities",
    icon: <Brain className="h-8 w-8" />,
    duration: "3 min",
    questions: 6,
    categories: ["Duration", "Consistency", "Quality", "Environment"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    id: "nutrition",
    title: "Nutrition Profile",
    description: "Analyze your dietary habits and discover personalized nutrition recommendations",
    icon: <Utensils className="h-8 w-8" />,
    duration: "4 min",
    questions: 7,
    categories: ["Diet Quality", "Eating Patterns", "Hydration", "Supplements"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "stress",
    title: "Stress Management",
    description: "Assess your stress levels and discover effective management strategies",
    icon: <Heart className="h-8 w-8" />,
    duration: "3 min",
    questions: 6,
    categories: ["Stress Levels", "Coping Mechanisms", "Work-Life Balance"],
    gradient: "from-green-500 to-teal-500"
  }
];

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Health Assessments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose an assessment to evaluate your health habits and receive personalized recommendations based on cutting-edge longevity science
          </p>
        </motion.div>

        {/* Assessment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {assessments.map((assessment, index) => (
            <motion.div
              key={assessment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${assessment.gradient} flex items-center justify-center text-white mb-4`}>
                    {assessment.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{assessment.title}</CardTitle>
                  <CardDescription className="text-base">
                    {assessment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{assessment.duration}</span>
                      </div>
                      <div>
                        <span>{assessment.questions} questions</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {assessment.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/assessment/${assessment.id}`} className="w-full">
                    <Button className="w-full">
                      Start Assessment
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-300">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Choose Assessment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Select the health area you want to evaluate
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-emerald-600 dark:text-emerald-300">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Answer Questions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Complete the quick questionnaire honestly
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-300">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Get Results</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive personalized recommendations via email
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

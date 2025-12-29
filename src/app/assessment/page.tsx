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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {assessments.map((assessment, index) => (
            <motion.div
              key={assessment.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              whileHover={{ y: -8 }}
            >
              <Link href={`/assessment/${assessment.id}`} className="block h-full">
                <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden group cursor-pointer">
                  <div className={`h-1.5 bg-gradient-to-r ${assessment.gradient}`} />
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${assessment.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}
                    >
                      {assessment.icon}
                    </motion.div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {assessment.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {assessment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between pt-0">
                    <div className="mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="font-medium">{assessment.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{assessment.questions}</span>
                          </div>
                          <span className="font-medium">questions</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {assessment.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-600"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className={`w-full h-12 font-semibold bg-gradient-to-r ${assessment.gradient} hover:opacity-90 transition-all shadow-md group-hover:shadow-lg`}>
                      Start Assessment →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400">Simple, fast, and science-backed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Choose Assessment",
                description: "Select the health area you want to evaluate from our evidence-based assessments",
                gradient: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-100 dark:bg-blue-900/30"
              },
              {
                step: 2,
                title: "Answer Questions",
                description: "Complete the quick questionnaire honestly - keyboard shortcuts available for speed",
                gradient: "from-emerald-500 to-emerald-600",
                bgColor: "bg-emerald-100 dark:bg-emerald-900/30"
              },
              {
                step: 3,
                title: "Get Results",
                description: "Receive personalized recommendations and track your progress over time",
                gradient: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-100 dark:bg-purple-900/30"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/20 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: "⚡", label: "3-5 minutes" },
              { icon: "🔒", label: "100% Private" },
              { icon: "🎯", label: "Personalized" },
              { icon: "📊", label: "Track Progress" }
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.05 }}
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

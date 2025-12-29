"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, TrendingUp, AlertCircle, Trophy, Target, Sparkles, Share2, Download } from 'lucide-react';

interface AssessmentResultsProps {
  title: string;
  totalScore: number;
  categoryScores: { [key: string]: number };
  recommendations: string[];
  onRetake: () => void;
  gradient?: string;
}

const getScoreLevel = (score: number) => {
  if (score >= 80) return { label: "Excellent", color: "text-green-600 dark:text-green-400", icon: Trophy };
  if (score >= 60) return { label: "Good", color: "text-blue-600 dark:text-blue-400", icon: Target };
  if (score >= 40) return { label: "Fair", color: "text-yellow-600 dark:text-yellow-400", icon: TrendingUp };
  return { label: "Needs Attention", color: "text-red-600 dark:text-red-400", icon: AlertCircle };
};

const getScoreMessage = (score: number) => {
  if (score >= 80) return "Outstanding! You're on the right track to optimal health and longevity.";
  if (score >= 60) return "Great progress! A few adjustments can take you to the next level.";
  if (score >= 40) return "You're making some good choices, but there's significant room for improvement.";
  return "This is an opportunity for positive change. Small steps can make a big difference.";
};

export default function AssessmentResults({
  title,
  totalScore,
  categoryScores,
  recommendations,
  onRetake,
  gradient = "from-blue-500 to-emerald-500"
}: AssessmentResultsProps) {
  const scoreLevel = getScoreLevel(totalScore);
  const ScoreIcon = scoreLevel.icon;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Hero Score Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Card className="overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${gradient}`} />
          <CardHeader className="text-center pb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4"
            >
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <div className="w-28 h-28 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-800 dark:text-white">{totalScore}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">out of 100</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <CardTitle className="text-3xl font-bold mb-2">{title} Results</CardTitle>
            <div className={`flex items-center justify-center gap-2 ${scoreLevel.color} mb-2`}>
              <ScoreIcon className="h-5 w-5" />
              <span className="text-xl font-semibold">{scoreLevel.label}</span>
            </div>
            <CardDescription className="text-base max-w-2xl mx-auto">
              {getScoreMessage(totalScore)}
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Category Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Category Breakdown
            </CardTitle>
            <CardDescription>See how you performed in each area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(categoryScores).map(([category, score], index) => {
                const categoryLevel = getScoreLevel(score);
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="border-l-4" style={{ borderLeftColor: score >= 60 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444' }}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold capitalize text-gray-700 dark:text-gray-300">{category}</span>
                          <span className={`text-lg font-bold ${categoryLevel.color}`}>{score}%</span>
                        </div>
                        <Progress value={score} className="h-3" />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{categoryLevel.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Personalized Recommendations
              </CardTitle>
              <CardDescription>Action steps to improve your score</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recommendations.map((rec, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = "/protocols"}>
          <CardContent className="p-6 text-center">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-3`}>
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">View Protocols</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore science-backed protocols to improve your health
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onRetake}>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
            <h3 className="font-semibold mb-2">Retake Assessment</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Track your progress over time
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Share & Download */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-6 flex justify-center gap-4"
      >
        <Button variant="outline" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share Results
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </motion.div>
    </div>
  );
}

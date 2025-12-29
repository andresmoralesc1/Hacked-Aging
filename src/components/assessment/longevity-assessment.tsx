"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Circle, Activity, Heart, Brain, Users } from 'lucide-react';
import EmailCollection from "@/components/assessment/email-collection";
import AssessmentResults from "@/components/assessment/assessment-results";

interface Question {
  id: number;
  category: string;
  question: string;
  options: { text: string; score: number }[];
  icon: React.ReactNode;
}

const questions: Question[] = [
  {
    id: 1,
    category: "Exercise",
    question: "How often do you engage in moderate exercise (walking, cycling, etc)?",
    options: [
      { text: "Rarely or never", score: 0 },
      { text: "1-2 times per week", score: 2 },
      { text: "3-4 times per week", score: 4 },
      { text: "5+ times per week", score: 5 }
    ],
    icon: <Activity className="h-5 w-5" />
  },
  {
    id: 2,
    category: "Exercise", 
    question: "Do you include strength training in your routine?",
    options: [
      { text: "Never", score: 0 },
      { text: "Occasionally (1-2x/month)", score: 1 },
      { text: "Regularly (1-2x/week)", score: 3 },
      { text: "Very regularly (3+x/week)", score: 5 }
    ],
    icon: <Activity className="h-5 w-5" />
  },
  {
    id: 3,
    category: "Nutrition",
    question: "How would you describe your typical diet?",
    options: [
      { text: "Mostly processed foods", score: 0 },
      { text: "Mixed diet, some healthy choices", score: 2 },
      { text: "Mostly whole foods", score: 4 },
      { text: "Primarily plant-based, whole foods", score: 5 }
    ],
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: 4,
    category: "Sleep",
    question: "How many hours of quality sleep do you get per night?",
    options: [
      { text: "Less than 6 hours", score: 0 },
      { text: "6-7 hours", score: 2 },
      { text: "7-8 hours", score: 4 },
      { text: "8+ hours consistently", score: 5 }
    ],
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: 5,
    category: "Sleep",
    question: "How consistent is your sleep schedule?",
    options: [
      { text: "Very irregular", score: 0 },
      { text: "Somewhat consistent", score: 2 },
      { text: "Mostly consistent", score: 4 },
      { text: "Very consistent (same bedtime/wake time)", score: 5 }
    ],
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: 6,
    category: "Social",
    question: "How often do you have meaningful social interactions?",
    options: [
      { text: "Rarely", score: 0 },
      { text: "Occasionally", score: 2 },
      { text: "Regularly", score: 4 },
      { text: "Daily", score: 5 }
    ],
    icon: <Users className="h-5 w-5" />
  },
  {
    id: 7,
    category: "Stress",
    question: "How would you rate your current stress level?",
    options: [
      { text: "Very high stress", score: 0 },
      { text: "Moderate stress", score: 2 },
      { text: "Low stress", score: 4 },
      { text: "Very low stress", score: 5 }
    ],
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: 8,
    category: "Stress",
    question: "Do you practice stress management techniques?",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 3 },
      { text: "Regularly", score: 5 }
    ],
    icon: <Brain className="h-5 w-5" />
  }
];

export default function LongevityAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showEmailCollection, setShowEmailCollection] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showResults || showEmailCollection) return;

      if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        const question = questions[currentQuestion];
        if (question.options[optionIndex]) {
          handleAnswer(question.options[optionIndex].score);
        }
      } else if (e.key === 'Backspace' && currentQuestion > 0) {
        e.preventDefault();
        handleBack();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentQuestion, showResults, showEmailCollection]);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowEmailCollection(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setShowEmailCollection(false);
    setShowResults(true);
  };

  const calculateScores = () => {
    const categoryScores: { [key: string]: number } = {};
    const categoryTotals: { [key: string]: number } = {};
    
    questions.forEach((q, index) => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = 0;
        categoryTotals[q.category] = 0;
      }
      categoryScores[q.category] += answers[index];
      categoryTotals[q.category] += 5; // Max score per question
    });

    const percentages: { [key: string]: number } = {};
    Object.keys(categoryScores).forEach(cat => {
      percentages[cat] = Math.round((categoryScores[cat] / categoryTotals[cat]) * 100);
    });

    return percentages;
  };

  const getTotalScore = () => {
    const maxPossible = questions.length * 5;
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    return Math.round((totalScore / maxPossible) * 100);
  };

  const getRecommendations = (scores: { [key: string]: number }) => {
    const recommendations = [];
    
    if (scores.Exercise < 60) {
      recommendations.push("Consider starting with our Zone 2 Cardio Foundation protocol");
    }
    if (scores.Nutrition < 60) {
      recommendations.push("Focus on whole foods and consider our nutrition guidelines");
    }
    if (scores.Sleep < 60) {
      recommendations.push("Prioritize sleep consistency for better recovery");
    }
    if (scores.Social < 60) {
      recommendations.push("Build regular social connections for mental health");
    }
    if (scores.Stress < 60) {
      recommendations.push("Implement stress management techniques daily");
    }

    return recommendations;
  };

  if (showEmailCollection) {
    return <EmailCollection onSubmit={handleEmailSubmit} assessmentTitle="Longevity Score" gradient="from-blue-500 to-emerald-500" />;
  }

  if (showResults) {
    const scores = calculateScores();
    const totalScore = getTotalScore();
    const recommendations = getRecommendations(scores);

    return (
      <AssessmentResults
        title="Longevity Score"
        totalScore={totalScore}
        categoryScores={scores}
        recommendations={recommendations}
        gradient="from-blue-500 to-emerald-500"
        onRetake={() => {
          setCurrentQuestion(0);
          setAnswers([]);
          setShowEmailCollection(false);
          setShowResults(false);
          setUserEmail('');
        }}
      />
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-blue-500 to-emerald-500" />
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span className="font-medium">Question {currentQuestion + 1}</span>
                <span className="text-gray-400">/</span>
                <span>{questions.length}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {question.icon}
              <span className="text-sm font-medium capitalize text-gray-700 dark:text-gray-300">{question.category}</span>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
              <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3 bg-gray-100 dark:bg-gray-800" />
          </div>
          <CardTitle className="text-2xl mb-2 leading-tight">{question.question}</CardTitle>
          <CardDescription className="text-sm">
            Select an option below or use keyboard shortcuts (1-4)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="w-full text-left justify-between h-auto p-4 hover:bg-primary/10 hover:border-primary hover:shadow-md transition-all group relative"
                  onClick={() => handleAnswer(option.score)}
                >
                  <span className="flex items-center flex-1">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-primary flex items-center justify-center mr-3 flex-shrink-0 transition-colors">
                      <Circle className="h-3 w-3 opacity-0 group-hover:opacity-100 fill-primary text-primary transition-opacity" />
                    </div>
                    <span className="flex-1">{option.text}</span>
                  </span>
                  <span className="ml-3 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded flex-shrink-0">
                    {index + 1}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            {currentQuestion > 0 ? (
              <Button
                variant="ghost"
                onClick={handleBack}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ← Back
                <span className="ml-2 text-xs text-gray-500">(Backspace)</span>
              </Button>
            ) : (
              <div></div>
            )}

            <div className="text-xs text-gray-500 dark:text-gray-400">
              ⌨️ Keyboard shortcuts enabled
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Activity, Heart, Brain, Users, TrendingUp } from 'lucide-react';

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
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
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

  if (showResults) {
    const scores = calculateScores();
    const totalScore = getTotalScore();
    const recommendations = getRecommendations(scores);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Your Longevity Score</CardTitle>
            <CardDescription>Personalized assessment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-primary mb-2">{totalScore}%</div>
              <div className="text-xl text-gray-600">
                {totalScore >= 80 ? "Excellent!" : 
                 totalScore >= 60 ? "Good Progress!" : 
                 totalScore >= 40 ? "Room for Improvement" : "Needs Attention"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {Object.entries(scores).map(([category, score]) => (
                <Card key={category}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium capitalize">{category}</span>
                      <span className="text-sm font-bold">{score}%</span>
                    </div>
                    <Progress value={score} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {recommendations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <div className="mt-8 text-center">
              <Button 
                onClick={() => window.location.href = "/protocols"}
                className="mr-4"
              >
                View Protocols
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResults(false);
                }}
              >
                Retake Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm font-medium capitalize">{question.category}</span>
          </div>
          <Progress value={progress} className="h-2 mb-4" />
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left justify-start h-auto p-4"
                onClick={() => handleAnswer(option.score)}
              >
                <span className="flex items-center">
                  <Circle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>{option.text}</span>
                </span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Utensils, Apple, Droplets, Pill } from 'lucide-react';
import EmailCollection from "@/components/assessment/email-collection";

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
    category: "Diet Quality",
    question: "What percentage of your diet consists of whole, unprocessed foods?",
    options: [
      { text: "Less than 25%", score: 0 },
      { text: "25-50%", score: 2 },
      { text: "50-75%", score: 4 },
      { text: "More than 75%", score: 5 }
    ],
    icon: <Apple className="h-5 w-5" />
  },
  {
    id: 2,
    category: "Diet Quality",
    question: "How many servings of vegetables do you eat daily?",
    options: [
      { text: "0-1 servings", score: 0 },
      { text: "2-3 servings", score: 2 },
      { text: "4-5 servings", score: 4 },
      { text: "6+ servings", score: 5 }
    ],
    icon: <Apple className="h-5 w-5" />
  },
  {
    id: 3,
    category: "Eating Patterns",
    question: "Do you practice mindful eating (slow, focused, no distractions)?",
    options: [
      { text: "Never, always rushed or distracted", score: 0 },
      { text: "Rarely, only occasionally mindful", score: 1 },
      { text: "Sometimes, for about half my meals", score: 3 },
      { text: "Regularly, for most meals", score: 5 }
    ],
    icon: <Utensils className="h-5 w-5" />
  },
  {
    id: 4,
    category: "Eating Patterns",
    question: "How consistent are your meal times?",
    options: [
      { text: "Very irregular, eat whenever", score: 0 },
      { text: "Somewhat inconsistent", score: 2 },
      { text: "Mostly consistent during weekdays", score: 4 },
      { text: "Very consistent, same times daily", score: 5 }
    ],
    icon: <Utensils className="h-5 w-5" />
  },
  {
    id: 5,
    category: "Hydration",
    question: "How much water do you drink daily?",
    options: [
      { text: "Less than 4 glasses (32 oz)", score: 0 },
      { text: "4-6 glasses (32-48 oz)", score: 2 },
      { text: "6-8 glasses (48-64 oz)", score: 4 },
      { text: "8+ glasses (64+ oz)", score: 5 }
    ],
    icon: <Droplets className="h-5 w-5" />
  },
  {
    id: 6,
    category: "Diet Quality",
    question: "How often do you consume added sugars or sweetened beverages?",
    options: [
      { text: "Daily, multiple times", score: 0 },
      { text: "Daily, once", score: 1 },
      { text: "A few times per week", score: 3 },
      { text: "Rarely or never", score: 5 }
    ],
    icon: <Apple className="h-5 w-5" />
  },
  {
    id: 7,
    category: "Supplements",
    question: "Do you take evidence-based supplements for your health goals?",
    options: [
      { text: "No supplements", score: 2 },
      { text: "Random supplements without research", score: 1 },
      { text: "Some evidence-based supplements", score: 4 },
      { text: "Comprehensive, personalized supplement protocol", score: 5 }
    ],
    icon: <Pill className="h-5 w-5" />
  }
];

export default function NutritionAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showEmailCollection, setShowEmailCollection] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowEmailCollection(true);
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
      categoryTotals[q.category] += 5;
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

    if (scores["Diet Quality"] < 60) {
      recommendations.push("Focus on whole, unprocessed foods and increase vegetable intake");
    }
    if (scores["Eating Patterns"] < 60) {
      recommendations.push("Establish consistent meal times and practice mindful eating");
    }
    if (scores["Hydration"] < 60) {
      recommendations.push("Increase water intake to at least 64 oz (8 glasses) per day");
    }
    if (scores["Supplements"] < 60) {
      recommendations.push("Consider evidence-based supplements tailored to your health goals");
    }

    return recommendations;
  };

  if (showEmailCollection) {
    return <EmailCollection onSubmit={handleEmailSubmit} assessmentTitle="Nutrition Profile" />;
  }

  if (showResults) {
    const scores = calculateScores();
    const totalScore = getTotalScore();
    const recommendations = getRecommendations(scores);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Your Nutrition Score</CardTitle>
            <CardDescription>Personalized assessment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-primary mb-2">{totalScore}%</div>
              <div className="text-xl text-gray-600 dark:text-gray-300">
                {totalScore >= 80 ? "Excellent Nutrition!" :
                 totalScore >= 60 ? "Good Dietary Habits" :
                 totalScore >= 40 ? "Needs Improvement" : "Requires Attention"}
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
                  setShowEmailCollection(false);
                  setShowResults(false);
                  setUserEmail('');
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
            <span className="text-sm text-gray-500 dark:text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
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

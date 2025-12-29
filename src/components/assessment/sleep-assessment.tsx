"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Moon, Clock, Thermometer, Sun } from 'lucide-react';
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
    category: "Duration",
    question: "How many hours of sleep do you typically get per night?",
    options: [
      { text: "Less than 5 hours", score: 0 },
      { text: "5-6 hours", score: 2 },
      { text: "7-8 hours", score: 5 },
      { text: "More than 9 hours", score: 3 }
    ],
    icon: <Moon className="h-5 w-5" />
  },
  {
    id: 2,
    category: "Consistency",
    question: "How consistent is your sleep schedule (same bedtime/wake time)?",
    options: [
      { text: "Very irregular, varies by 2+ hours", score: 0 },
      { text: "Somewhat inconsistent, varies by 1-2 hours", score: 2 },
      { text: "Mostly consistent, varies by 30-60 min", score: 4 },
      { text: "Very consistent, within 30 minutes", score: 5 }
    ],
    icon: <Clock className="h-5 w-5" />
  },
  {
    id: 3,
    category: "Quality",
    question: "How long does it take you to fall asleep?",
    options: [
      { text: "More than 30 minutes", score: 0 },
      { text: "20-30 minutes", score: 2 },
      { text: "10-20 minutes", score: 4 },
      { text: "Less than 10 minutes", score: 5 }
    ],
    icon: <Moon className="h-5 w-5" />
  },
  {
    id: 4,
    category: "Quality",
    question: "How often do you wake up during the night?",
    options: [
      { text: "Many times, hard to fall back asleep", score: 0 },
      { text: "Several times, takes a while to sleep again", score: 2 },
      { text: "Once or twice, fall back asleep quickly", score: 4 },
      { text: "Rarely or never", score: 5 }
    ],
    icon: <Moon className="h-5 w-5" />
  },
  {
    id: 5,
    category: "Environment",
    question: "How would you rate your sleep environment?",
    options: [
      { text: "Noisy, bright, uncomfortable", score: 0 },
      { text: "Some noise/light, decent comfort", score: 2 },
      { text: "Quiet, dark, comfortable", score: 4 },
      { text: "Optimized (blackout, cool, quiet, comfortable)", score: 5 }
    ],
    icon: <Thermometer className="h-5 w-5" />
  },
  {
    id: 6,
    category: "Environment",
    question: "Do you use screens (phone, TV, computer) before bed?",
    options: [
      { text: "Yes, right until I try to sleep", score: 0 },
      { text: "Yes, but stop 15-30 min before bed", score: 2 },
      { text: "Rarely, stop 30-60 min before bed", score: 4 },
      { text: "Never, stop 1+ hours before bed", score: 5 }
    ],
    icon: <Sun className="h-5 w-5" />
  }
];

export default function SleepAssessment() {
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

    if (scores["Duration"] < 60) {
      recommendations.push("Aim for 7-8 hours of sleep per night for optimal health");
    }
    if (scores["Consistency"] < 60) {
      recommendations.push("Establish a consistent sleep schedule, even on weekends");
    }
    if (scores["Quality"] < 60) {
      recommendations.push("Improve sleep quality with relaxation techniques before bed");
    }
    if (scores["Environment"] < 60) {
      recommendations.push("Optimize your sleep environment: dark, cool (65-68°F), and quiet");
    }

    return recommendations;
  };

  if (showEmailCollection) {
    return <EmailCollection onSubmit={handleEmailSubmit} assessmentTitle="Sleep Quality" />;
  }

  if (showResults) {
    const scores = calculateScores();
    const totalScore = getTotalScore();
    const recommendations = getRecommendations(scores);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Your Sleep Score</CardTitle>
            <CardDescription>Personalized assessment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-primary mb-2">{totalScore}%</div>
              <div className="text-xl text-gray-600 dark:text-gray-300">
                {totalScore >= 80 ? "Excellent Sleep Hygiene!" :
                 totalScore >= 60 ? "Good Sleep Patterns" :
                 totalScore >= 40 ? "Needs Improvement" : "Requires Immediate Attention"}
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

"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Heart, Brain, Briefcase, Timer } from 'lucide-react';
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
    category: "Stress Levels",
    question: "How would you rate your overall stress level?",
    options: [
      { text: "Extremely high, overwhelming daily", score: 0 },
      { text: "High, frequently stressed", score: 2 },
      { text: "Moderate, manageable most days", score: 4 },
      { text: "Low, rarely feel stressed", score: 5 }
    ],
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: 2,
    category: "Stress Levels",
    question: "How often do you feel anxious or worried?",
    options: [
      { text: "Constantly, multiple times daily", score: 0 },
      { text: "Daily", score: 1 },
      { text: "A few times per week", score: 3 },
      { text: "Rarely or never", score: 5 }
    ],
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: 3,
    category: "Coping Mechanisms",
    question: "Do you practice stress management techniques (meditation, breathing, etc.)?",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely, only in crisis", score: 1 },
      { text: "Sometimes, a few times per week", score: 3 },
      { text: "Regularly, daily practice", score: 5 }
    ],
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: 4,
    category: "Coping Mechanisms",
    question: "How do you typically handle stressful situations?",
    options: [
      { text: "React emotionally, feel overwhelmed", score: 0 },
      { text: "Sometimes cope well, often struggle", score: 2 },
      { text: "Usually cope effectively", score: 4 },
      { text: "Remain calm, use healthy strategies", score: 5 }
    ],
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: 5,
    category: "Work-Life Balance",
    question: "How many hours per week do you work (including commute)?",
    options: [
      { text: "More than 60 hours", score: 0 },
      { text: "50-60 hours", score: 2 },
      { text: "40-50 hours", score: 4 },
      { text: "Less than 40 hours", score: 5 }
    ],
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    id: 6,
    category: "Work-Life Balance",
    question: "How often do you take time for hobbies or relaxation?",
    options: [
      { text: "Never, no time", score: 0 },
      { text: "Rarely, once per month", score: 1 },
      { text: "Sometimes, weekly", score: 3 },
      { text: "Regularly, multiple times per week", score: 5 }
    ],
    icon: <Timer className="h-5 w-5" />
  }
];

export default function StressAssessment() {
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

    if (scores["Stress Levels"] < 60) {
      recommendations.push("Consider professional support or counseling for stress management");
    }
    if (scores["Coping Mechanisms"] < 60) {
      recommendations.push("Develop daily stress management practices like meditation or deep breathing");
    }
    if (scores["Work-Life Balance"] < 60) {
      recommendations.push("Set boundaries and prioritize time for rest and personal activities");
    }

    return recommendations;
  };

  if (showEmailCollection) {
    return <EmailCollection onSubmit={handleEmailSubmit} assessmentTitle="Stress Management" />;
  }

  if (showResults) {
    const scores = calculateScores();
    const totalScore = getTotalScore();
    const recommendations = getRecommendations(scores);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Your Stress Management Score</CardTitle>
            <CardDescription>Personalized assessment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-primary mb-2">{totalScore}%</div>
              <div className="text-xl text-gray-600 dark:text-gray-300">
                {totalScore >= 80 ? "Excellent Stress Management!" :
                 totalScore >= 60 ? "Good Coping Skills" :
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

"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Battery, Heart, Moon, Utensils } from 'lucide-react';
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
    category: "Sleep Quality",
    question: "How refreshed do you feel when you wake up?",
    options: [
      { text: "Exhausted, struggle to get out of bed", score: 0 },
      { text: "Somewhat tired, need coffee immediately", score: 2 },
      { text: "Fairly refreshed, ready within 30 min", score: 4 },
      { text: "Fully energized and ready to start the day", score: 5 }
    ],
    icon: <Moon className="h-5 w-5" />
  },
  {
    id: 2,
    category: "Physical Recovery",
    question: "How long does it take you to recover from intense exercise?",
    options: [
      { text: "3+ days, significant soreness", score: 0 },
      { text: "2-3 days, moderate soreness", score: 2 },
      { text: "1-2 days, mild soreness", score: 4 },
      { text: "Less than 24 hours, minimal soreness", score: 5 }
    ],
    icon: <Battery className="h-5 w-5" />
  },
  {
    id: 3,
    category: "Physical Recovery",
    question: "Do you experience muscle or joint pain regularly?",
    options: [
      { text: "Yes, daily chronic pain", score: 0 },
      { text: "Frequently, several times per week", score: 1 },
      { text: "Occasionally, mild discomfort", score: 3 },
      { text: "Rarely or never", score: 5 }
    ],
    icon: <Battery className="h-5 w-5" />
  },
  {
    id: 4,
    category: "Mental Recovery",
    question: "How quickly can you bounce back from stressful events?",
    options: [
      { text: "Takes days to weeks", score: 0 },
      { text: "Takes 1-2 days", score: 2 },
      { text: "Within a few hours", score: 4 },
      { text: "Almost immediately", score: 5 }
    ],
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: 5,
    category: "Mental Recovery",
    question: "How often do you take mental breaks during the day?",
    options: [
      { text: "Never, constant work/stress", score: 0 },
      { text: "Rarely, only when forced", score: 1 },
      { text: "Sometimes, a few short breaks", score: 3 },
      { text: "Regularly, scheduled breaks throughout", score: 5 }
    ],
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: 6,
    category: "Nutrition",
    question: "Do you prioritize protein intake after exercise?",
    options: [
      { text: "Never think about it", score: 0 },
      { text: "Sometimes, inconsistent", score: 2 },
      { text: "Usually, within a few hours", score: 4 },
      { text: "Always, within 30-60 minutes", score: 5 }
    ],
    icon: <Utensils className="h-5 w-5" />
  },
  {
    id: 7,
    category: "Sleep Quality",
    question: "Do you use recovery techniques (stretching, foam rolling, ice baths)?",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely, only when in pain", score: 1 },
      { text: "Sometimes, 1-2x per week", score: 3 },
      { text: "Regularly, part of my routine", score: 5 }
    ],
    icon: <Moon className="h-5 w-5" />
  }
];

export default function RecoveryAssessment() {
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

    if (scores["Sleep Quality"] < 60) {
      recommendations.push("Focus on sleep consistency and quality for better recovery");
    }
    if (scores["Physical Recovery"] < 60) {
      recommendations.push("Incorporate active recovery days and stretching into your routine");
    }
    if (scores["Mental Recovery"] < 60) {
      recommendations.push("Practice stress management and schedule regular mental breaks");
    }
    if (scores["Nutrition"] < 60) {
      recommendations.push("Optimize post-workout nutrition with adequate protein intake");
    }

    return recommendations;
  };

  if (showEmailCollection) {
    return <EmailCollection onSubmit={handleEmailSubmit} assessmentTitle="Recovery Assessment" />;
  }

  if (showResults) {
    const scores = calculateScores();
    const totalScore = getTotalScore();
    const recommendations = getRecommendations(scores);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Your Recovery Score</CardTitle>
            <CardDescription>Personalized assessment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-primary mb-2">{totalScore}%</div>
              <div className="text-xl text-gray-600 dark:text-gray-300">
                {totalScore >= 80 ? "Excellent Recovery!" :
                 totalScore >= 60 ? "Good Recovery Capacity" :
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

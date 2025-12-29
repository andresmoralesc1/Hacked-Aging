"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Loader2, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface EmailCollectionProps {
  onSubmit: (email: string) => void;
  assessmentTitle: string;
  gradient?: string;
}

export default function EmailCollection({ onSubmit, assessmentTitle, gradient = "from-blue-500 to-emerald-500" }: EmailCollectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      onSubmit(email);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${gradient}`} />
          <CardHeader className="text-center pt-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
            >
              <CheckCircle2 className="h-10 w-10 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CardTitle className="text-3xl mb-3">Assessment Complete! 🎉</CardTitle>
              <CardDescription className="text-base">
                Enter your email to receive your personalized {assessmentTitle} results
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-5 py-4 border-2 border-input bg-background rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                  required
                  disabled={isSubmitting}
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 mt-2 flex items-center gap-1"
                  >
                    ⚠️ {error}
                  </motion.p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span>Personalized Tips</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>100% Private</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-primary">Privacy First:</strong> We'll only use your email to send your results and occasional evidence-based health insights. Unsubscribe anytime with one click.
                </p>
              </div>

              <Button
                type="submit"
                className={`w-full h-14 text-lg font-semibold bg-gradient-to-r ${gradient} hover:opacity-90 transition-all`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Your Results...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    View My Personalized Results
                    <Mail className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

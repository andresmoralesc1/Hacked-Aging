import RecoveryAssessment from "@/components/assessment/recovery-assessment";

export default function RecoveryAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Recovery Assessment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Evaluate your body's ability to recover from physical and mental stress
          </p>
        </div>

        <RecoveryAssessment />
      </div>
    </div>
  );
}

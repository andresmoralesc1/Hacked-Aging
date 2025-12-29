import StressAssessment from "@/components/assessment/stress-assessment";

export default function StressAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Stress Management Assessment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Assess your stress levels and discover effective management strategies
          </p>
        </div>

        <StressAssessment />
      </div>
    </div>
  );
}

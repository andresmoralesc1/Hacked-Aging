import dynamic from 'next/dynamic';
import HeroSection from "@/components/sections/hero-section";

// Lazy load below-the-fold components for better performance
const Medicine3Approach = dynamic(() => import("@/components/sections/medicine-3-approach"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
});
const FourPillars = dynamic(() => import("@/components/sections/four-pillars"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
});
const RecoveryLab = dynamic(() => import("@/components/sections/recovery-lab"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
});
const LatestFromChannel = dynamic(() => import("@/components/sections/latest-from-channel"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
});
const EnhancedTrustSignals = dynamic(() => import("@/components/sections/enhanced-trust-signals"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
});
const MedicalDisclaimer = dynamic(() => import("@/components/ui/medical-disclaimer"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
});

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50">
      <HeroSection />
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Medicine3Approach />
        </div>
      </section>
      <section className="py-8 md:py-12 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FourPillars />
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RecoveryLab />
        </div>
      </section>
      <section className="py-8 md:py-12 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LatestFromChannel />
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <EnhancedTrustSignals />
          <div className="mt-8">
            <MedicalDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}

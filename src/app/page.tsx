import HeroSection from "@/components/sections/hero-section";
import Medicine3Approach from "@/components/sections/medicine-3-approach";
import FourPillars from "@/components/sections/four-pillars";
import RecoveryLab from "@/components/sections/recovery-lab";
import LatestFromChannel from "@/components/sections/latest-from-channel";
import EnhancedTrustSignals from "@/components/sections/enhanced-trust-signals";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";

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

import HeroSection from "@/components/sections/hero-section";
import Medicine3Approach from "@/components/sections/medicine-3-approach";
import FourPillars from "@/components/sections/four-pillars";
import RecoveryLab from "@/components/sections/recovery-lab";
import LatestFromChannel from "@/components/sections/latest-from-channel";
import TrustSignals from "@/components/sections/trust-signals";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Medicine3Approach />
        <FourPillars />
        <RecoveryLab />
        <LatestFromChannel />
        <TrustSignals />
      </main>
      <Footer />
    </div>
  );
}

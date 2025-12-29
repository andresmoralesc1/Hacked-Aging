"use client";

import { AlertTriangle, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MedicalDisclaimer() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700 rounded-xl p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
        </div>
        <div className="space-y-3 flex-1">
          <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">
            ⚕️ Important Medical Disclaimer
          </h3>

          <div className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed space-y-2">
            <p className="font-medium">
              This information is for <strong>educational purposes only</strong> and
              <strong> does not constitute medical advice</strong>, diagnosis, or treatment.
            </p>
            <p>
              Always consult with qualified healthcare professionals before starting any new health protocol,
              supplement regimen, or exercise program. Individual results may vary.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t-2 border-amber-300 dark:border-amber-700 space-y-3">
        <div className="flex items-start gap-2">
          <Heart className="h-4 w-4 text-red-500 flex-shrink-0 mt-1" />
          <div className="text-sm text-amber-700 dark:text-amber-300">
            <p className="font-semibold mb-1">Our Commitment to You:</p>
            <p>
              All content is based on peer-reviewed research and evidence-based practices.
              We prioritize your safety and recommend professional medical supervision for all health decisions.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-300">
            <Phone className="h-3 w-3" />
            <span className="font-semibold">Medical Emergency?</span>
            <span>Call 911 or your local emergency service</span>
          </div>
          <a href="/contact">
            <Button variant="outline" size="sm" className="border-amber-600 text-amber-900 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-900/50">
              Contact Professional Support
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
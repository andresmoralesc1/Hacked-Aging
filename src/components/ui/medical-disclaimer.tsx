"use client";

import { AlertTriangle, Heart } from "lucide-react";

export default function MedicalDisclaimer() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-bold text-amber-900 dark:text-amber-100">
            Medical Disclaimer
          </h3>
          
          <div className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
            <p>
              This information is for <strong>educational purposes only</strong> and 
              <strong> does not constitute medical advice</strong>. 
              Always consult qualified healthcare professionals before starting any protocol.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-amber-300 dark:border-amber-700">
        <div className="flex items-start gap-2">
          <Heart className="h-3 w-3 text-red-500 flex-shrink-0" />
          <div className="text-xs text-amber-700 dark:text-amber-300">
            <p className="font-semibold">Our Commitment:</p>
            <p>
              Evidence-based information from peer-reviewed sources. 
              Always prioritize professional medical supervision.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}
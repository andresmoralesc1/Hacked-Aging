"use client";

import { AlertTriangle, Info, Heart } from "lucide-react";

export default function MedicalDisclaimer() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">
            Descargo de Responsabilidad Médica
          </h3>
          
          <div className="space-y-3 text-sm text-amber-800 dark:text-amber-200">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>
                <strong>Importante:</strong> La información proporcionada en Hacked Aging es 
                <span className="font-semibold"> únicamente con fines educativos</span> y 
                <span className="font-semibold"> no constituye consejo médico profesional</span>.
              </p>
            </div>
            
            <div className="pl-6 space-y-2">
              <p>
                • No reemplaza la consulta con profesionales de la salud calificados
              </p>
              <p>
                • Antes de iniciar cualquier protocolo, consulte con su médico
              </p>
              <p>
                • Las respuestas individuales pueden variar significativamente
              </p>
              <p>
                • No interrumpa tratamientos médicos sin supervisión profesional
              </p>
            </div>
            
            <div className="pt-3 border-t border-amber-300 dark:border-amber-700">
              <div className="flex items-start gap-2">
                <Heart className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" />
                <div>
                  <p className="font-semibold mb-1">Nuestro Compromiso:</p>
                  <p>
                    Nos esforzamos por proporcionar información basada en evidencia científica 
                    revisada por pares. Sin embargo, la ciencia de la longevidad evuelve 
                    constantemente. Siempre priorice la seguridad y la supervisión médica profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-amber-700 dark:text-amber-300 pt-3 border-t border-amber-300 dark:border-amber-700">
        <strong>En caso de emergencia médica:</strong> Llame a servicios de emergencia inmediatamente 
        o contacte a su profesional de salud local. Este sitio no proporciona servicios médicos de emergencia.
      </div>
    </div>
  );
}
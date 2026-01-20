import React from 'react';
import { CheckIcon } from 'lucide-react';
type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
};
export function StepIndicator({
  currentStep,
  totalSteps,
  stepLabels
}: StepIndicatorProps) {
  const defaultLabels = Array.from({
    length: totalSteps
  }, (_, i) => `Step ${i + 1}`);
  const labels = stepLabels || defaultLabels;
  return <div className="flex items-center justify-between w-full max-w-md mx-auto" role="navigation" aria-label="Progress">
      {Array.from({
      length: totalSteps
    }, (_, index) => {
      const stepNumber = index + 1;
      const isCompleted = stepNumber < currentStep;
      const isCurrent = stepNumber === currentStep;
      const isUpcoming = stepNumber > currentStep;
      return <div key={stepNumber} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                  ${isCompleted ? 'bg-slate-900 text-white' : ''}
                  ${isCurrent ? 'bg-slate-900 text-white ring-4 ring-slate-100' : ''}
                  ${isUpcoming ? 'bg-gray-100 text-gray-400 border-2 border-gray-200' : ''}
                `} aria-current={isCurrent ? 'step' : undefined}>
                  {isCompleted ? <CheckIcon className="w-4 h-4" aria-hidden="true" /> : stepNumber}
                </div>
                <span className={`
                  mt-2 text-xs font-medium whitespace-nowrap
                  ${isCurrent ? 'text-slate-900' : 'text-gray-400'}
                `}>
                  {labels[index]}
                </span>
              </div>

              {index < totalSteps - 1 && <div className={`
                  flex-1 h-0.5 mx-3 mt-[-1rem]
                  ${stepNumber < currentStep ? 'bg-slate-900' : 'bg-gray-200'}
                `} aria-hidden="true" />}
            </div>;
    })}
    </div>;
}
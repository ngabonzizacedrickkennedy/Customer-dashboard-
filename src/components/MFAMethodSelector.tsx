import React from 'react';
import { SmartphoneIcon, KeyIcon } from 'lucide-react';
type MFAMethod = 'sms' | 'authenticator';
type MFAMethodSelectorProps = {
  selectedMethod: MFAMethod;
  onMethodChange: (method: MFAMethod) => void;
};
export function MFAMethodSelector({
  selectedMethod,
  onMethodChange
}: MFAMethodSelectorProps) {
  const methods = [{
    id: 'sms' as const,
    label: 'SMS',
    description: 'Receive codes via text message',
    icon: SmartphoneIcon
  }, {
    id: 'authenticator' as const,
    label: 'Authenticator App',
    description: 'Use Google Authenticator or similar',
    icon: KeyIcon
  }];
  return <div className="space-y-3" role="radiogroup" aria-label="Select MFA method">
      {methods.map(method => {
      const isSelected = selectedMethod === method.id;
      const Icon = method.icon;
      return <button key={method.id} type="button" role="radio" aria-checked={isSelected} onClick={() => onMethodChange(method.id)} className={`
              w-full p-4 rounded-lg border-2 text-left transition-all
              flex items-center gap-4
              ${isSelected ? 'border-slate-900 bg-slate-50' : 'border-gray-200 bg-white hover:border-gray-300'}
            `}>
            <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${isSelected ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-500'}
              `}>
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className={`font-medium ${isSelected ? 'text-slate-900' : 'text-gray-700'}`}>
                {method.label}
              </div>
              <div className="text-sm text-gray-500">{method.description}</div>
            </div>
            <div className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${isSelected ? 'border-slate-900' : 'border-gray-300'}
              `}>
              {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />}
            </div>
          </button>;
    })}
    </div>;
}
import React, { useState } from 'react';
import { ShieldCheckIcon, LoaderIcon, ArrowRightIcon } from 'lucide-react';
import { StepIndicator } from '../components/StepIndicator';
import { MFAMethodSelector } from '../components/MFAMethodSelector';
import { BackupCodes } from '../components/BackupCodes';
type MFAMethod = 'sms' | 'authenticator';
const BACKUP_CODES = ['A7K9-M2X4', 'B3P8-N5Y1', 'C6Q2-R8Z7', 'D9S4-T1W3', 'E2U7-V5X9', 'F5W1-Y8Z2', 'G8X4-A3B6', 'H1Y7-C9D2', 'J4Z2-E6F8', 'K7A5-G1H4'];
export function MFASetup() {
  const [selectedMethod, setSelectedMethod] = useState<MFAMethod>('authenticator');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleVerify = async () => {
    if (verificationCode.length !== 6) {
      setError('Please enter a 6-digit verification code');
      return;
    }
    setError(null);
    setIsVerifying(true);
    // Mock verification with delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Simulate success (in real app, would validate against backend)
    if (verificationCode === '000000') {
      setError('Invalid verification code. Please try again.');
      setIsVerifying(false);
      return;
    }
    setIsVerifying(false);
    setIsVerified(true);
  };
  const handleCodeChange = (value: string) => {
    // Only allow digits and limit to 6 characters
    const cleaned = value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(cleaned);
    if (error) setError(null);
  };
  return <div className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="bg-slate-900 py-6">
        <div className="max-w-md mx-auto px-4 flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <ShieldCheckIcon className="w-6 h-6 text-slate-900" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4">
        <div className="max-w-md mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-slate-900 mb-2">
              {isVerified ? 'MFA Enabled Successfully' : 'Secure Your Account'}
            </h1>
            <p className="text-gray-500">
              {isVerified ? 'Your account is now protected with two-factor authentication' : 'Add an extra layer of security to your account'}
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            {/* Step Indicator */}
            <div className="mb-8">
              <StepIndicator currentStep={4} totalSteps={4} stepLabels={['Account', 'Profile', 'Preferences', 'Security']} />
            </div>

            {!isVerified ? <div className="space-y-6">
                {/* Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose verification method
                  </label>
                  <MFAMethodSelector selectedMethod={selectedMethod} onMethodChange={setSelectedMethod} />
                </div>

                {/* Conditional Content based on method */}
                {selectedMethod === 'sms' ? <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select className="px-3 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" aria-label="Country code">
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        <option value="+61">+61</option>
                      </select>
                      <input id="phone" type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent placeholder:text-gray-400" />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      We'll send a verification code to this number
                    </p>
                  </div> : <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Scan QR Code
                    </label>
                    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                      {/* QR Code Placeholder */}
                      <div className="w-40 h-40 bg-white rounded-lg border border-gray-200 flex items-center justify-center mb-4">
                        <svg viewBox="0 0 100 100" className="w-32 h-32" aria-label="QR Code for authenticator app">
                          {/* Simplified QR code pattern */}
                          <rect x="10" y="10" width="25" height="25" fill="#1e293b" />
                          <rect x="65" y="10" width="25" height="25" fill="#1e293b" />
                          <rect x="10" y="65" width="25" height="25" fill="#1e293b" />
                          <rect x="15" y="15" width="15" height="15" fill="white" />
                          <rect x="70" y="15" width="15" height="15" fill="white" />
                          <rect x="15" y="70" width="15" height="15" fill="white" />
                          <rect x="20" y="20" width="5" height="5" fill="#1e293b" />
                          <rect x="75" y="20" width="5" height="5" fill="#1e293b" />
                          <rect x="20" y="75" width="5" height="5" fill="#1e293b" />
                          <rect x="40" y="10" width="5" height="5" fill="#1e293b" />
                          <rect x="50" y="10" width="5" height="5" fill="#1e293b" />
                          <rect x="40" y="20" width="5" height="5" fill="#1e293b" />
                          <rect x="45" y="25" width="5" height="5" fill="#1e293b" />
                          <rect x="40" y="40" width="20" height="20" fill="#1e293b" />
                          <rect x="45" y="45" width="10" height="10" fill="white" />
                          <rect x="10" y="45" width="5" height="5" fill="#1e293b" />
                          <rect x="20" y="50" width="5" height="5" fill="#1e293b" />
                          <rect x="85" y="40" width="5" height="5" fill="#1e293b" />
                          <rect x="70" y="50" width="5" height="5" fill="#1e293b" />
                          <rect x="45" y="70" width="5" height="5" fill="#1e293b" />
                          <rect x="55" y="75" width="5" height="5" fill="#1e293b" />
                          <rect x="70" y="70" width="5" height="5" fill="#1e293b" />
                          <rect x="80" y="80" width="5" height="5" fill="#1e293b" />
                          <rect x="65" y="85" width="10" height="5" fill="#1e293b" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        Scan this code with Google Authenticator,
                        <br />
                        Authy, or similar app
                      </p>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">
                        Can't scan? Enter this code manually:
                      </p>
                      <code className="text-sm font-mono text-slate-900 select-all">
                        JBSWY3DPEHPK3PXP
                      </code>
                    </div>
                  </div>}

                {/* Verification Code Input */}
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                    Verification Code
                  </label>
                  <input id="code" type="text" inputMode="numeric" value={verificationCode} onChange={e => handleCodeChange(e.target.value)} placeholder="Enter 6-digit code" maxLength={6} className={`
                      w-full px-4 py-3 border rounded-lg text-center text-xl font-mono tracking-widest
                      focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent
                      placeholder:text-gray-400 placeholder:text-base placeholder:tracking-normal placeholder:font-sans
                      ${error ? 'border-red-300 bg-red-50' : 'border-gray-200'}
                    `} aria-describedby={error ? 'code-error' : undefined} />
                  {error && <p id="code-error" className="mt-2 text-sm text-red-600" role="alert">
                      {error}
                    </p>}
                </div>

                {/* Verify Button */}
                <button onClick={handleVerify} disabled={isVerifying || verificationCode.length !== 6} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                  {isVerifying ? <>
                      <LoaderIcon className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Verifying...
                    </> : <>
                      Verify and Enable
                      <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
                    </>}
                </button>

                {/* Skip Option */}
                <div className="text-center">
                  <button type="button" className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors">
                    Skip for Now
                  </button>
                  <p className="mt-1 text-xs text-gray-400">
                    You can enable MFA later in your security settings
                  </p>
                </div>
              </div> /* Success State - Show Backup Codes */ : <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheckIcon className="w-8 h-8 text-green-600" aria-hidden="true" />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">
                    Two-Factor Authentication Enabled
                  </h2>
                  <p className="text-sm text-gray-500">
                    Save your backup codes below
                  </p>
                </div>

                <BackupCodes codes={BACKUP_CODES} />

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-colors">
                  Continue to Dashboard
                  <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>}
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Need help?{' '}
            <a href="#" className="text-slate-900 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </main>
    </div>;
}
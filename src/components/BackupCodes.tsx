import React, { useState, createElement } from 'react';
import { CopyIcon, CheckIcon, DownloadIcon } from 'lucide-react';
type BackupCodesProps = {
  codes: string[];
};
export function BackupCodes({
  codes
}: BackupCodesProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [allCopied, setAllCopied] = useState(false);
  const copyCode = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy code');
    }
  };
  const copyAllCodes = async () => {
    try {
      await navigator.clipboard.writeText(codes.join('\n'));
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy codes');
    }
  };
  const downloadCodes = () => {
    const content = `Backup Codes\n${'='.repeat(20)}\n\n${codes.map((code, i) => `${i + 1}. ${code}`).join('\n')}\n\nKeep these codes safe. Each code can only be used once.`;
    const blob = new Blob([content], {
      type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'backup-codes.txt';
    a.click();
    URL.revokeObjectURL(url);
  };
  return <div className="space-y-4">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-sm text-amber-800">
          <strong>Important:</strong> Save these backup codes in a secure
          location. Each code can only be used once to access your account if
          you lose your device.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 p-4 bg-gray-50 rounded-lg font-mono text-sm" role="list" aria-label="Backup codes">
        {codes.map((code, index) => <button key={index} onClick={() => copyCode(code, index)} className="flex items-center justify-between p-2 bg-white rounded border border-gray-200 hover:border-gray-300 transition-colors group" aria-label={`Copy backup code ${code}`}>
            <span className="text-gray-700">{code}</span>
            {copiedIndex === index ? <CheckIcon className="w-4 h-4 text-green-500" aria-hidden="true" /> : <CopyIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />}
          </button>)}
      </div>

      <div className="flex gap-3">
        <button onClick={copyAllCodes} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          {allCopied ? <>
              <CheckIcon className="w-4 h-4 text-green-500" aria-hidden="true" />
              Copied!
            </> : <>
              <CopyIcon className="w-4 h-4" aria-hidden="true" />
              Copy All
            </>}
        </button>
        <button onClick={downloadCodes} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <DownloadIcon className="w-4 h-4" aria-hidden="true" />
          Download
        </button>
      </div>
    </div>;
}
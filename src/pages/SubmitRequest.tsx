import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../components/DashboardLayout';
import { Upload, X, FileText, CheckCircle, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

type FormData = {
  serviceName: string;
  serviceCategory: string;
  purchaseDate: string;
  amount: string;
  reason: string;
  description: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
};

export function SubmitRequest() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    serviceName: '',
    serviceCategory: '',
    purchaseDate: '',
    amount: '',
    reason: '',
    description: '',
    bankName: '',
    accountNumber: '',
    accountHolder: '',
  });

  const steps = [
    { number: 1, label: 'Service Details' },
    { number: 2, label: 'Refund Reason' },
    { number: 3, label: 'Documents' },
    { number: 4, label: 'Payment Info' },
    { number: 5, label: 'Review' },
  ];

  const serviceCategories = [
    'Cloud Hosting',
    'Data Backup',
    'Email Hosting',
    'Domain Services',
    'Security Services',
    'Support Services',
    'Other',
  ];

  const refundReasons = [
    'Service not as described',
    'Technical issues',
    'Poor performance',
    'Billing error',
    'Service downtime',
    'Changed requirements',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/requests/REF-2024-099');
    }, 1500);
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Submit Refund Request</h1>
          <p className="text-sm text-gray-600 mt-1">
            Complete all steps to submit your refund request
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ${
                      currentStep > step.number
                        ? 'bg-green-500 border-green-500 text-white'
                        : currentStep === step.number
                        ? 'bg-blue-800 border-blue-800 text-white'
                        : 'bg-white border-gray-300 text-gray-500'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium hidden sm:block ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded ${
                      currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          {/* Step 1: Service Details */}
          {currentStep === 1 && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Service Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Name *
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    value={formData.serviceName}
                    onChange={handleInputChange}
                    placeholder="Enter the service name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Category *
                  </label>
                  <select
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select a category</option>
                    {serviceCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Purchase Date *
                    </label>
                    <input
                      type="date"
                      name="purchaseDate"
                      value={formData.purchaseDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Refund Amount (USD) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Refund Reason */}
          {currentStep === 2 && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Refund Reason</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Reason *
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select a reason</option>
                    {refundReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Please provide a detailed description of why you are requesting this refund..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Minimum 50 characters. Be as specific as possible.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Documents */}
          {currentStep === 3 && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Supporting Documents</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Documents
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-12 h-12 text-gray-400 mb-4" />
                      <span className="text-sm font-medium text-gray-900">
                        Click to upload or drag and drop
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        PDF, DOC, PNG, JPG up to 10MB each
                      </span>
                    </label>
                  </div>
                </div>

                {/* Uploaded Files List */}
                {files.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">
                      Uploaded Files ({files.length})
                    </h3>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024).toFixed(1)} KB
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile(index)}
                            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-800">
                        Recommended Documents
                      </p>
                      <ul className="mt-2 text-xs text-amber-700 space-y-1">
                        <li>• Original invoice or receipt</li>
                        <li>• Service agreement or contract</li>
                        <li>• Screenshots of issues (if applicable)</li>
                        <li>• Previous communication with support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment Information */}
          {currentStep === 4 && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Information</h2>
              <p className="text-sm text-gray-600 mb-6">
                Enter your bank details where you would like to receive the refund.
              </p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Name *
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    placeholder="Enter your bank name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number *
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your account number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Holder Name *
                  </label>
                  <input
                    type="text"
                    name="accountHolder"
                    value={formData.accountHolder}
                    onChange={handleInputChange}
                    placeholder="Enter account holder name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      Your bank details are encrypted and securely stored. We will only use
                      this information to process your refund.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review */}
          {currentStep === 5 && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Review Your Request</h2>
              <div className="space-y-6">
                {/* Service Details Summary */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Service Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Service Name</p>
                      <p className="font-medium text-gray-900">
                        {formData.serviceName || '-'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p className="font-medium text-gray-900">
                        {formData.serviceCategory || '-'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Purchase Date</p>
                      <p className="font-medium text-gray-900">
                        {formData.purchaseDate || '-'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Refund Amount</p>
                      <p className="font-medium text-gray-900">
                        ${formData.amount || '0.00'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason Summary */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Refund Reason</h3>
                  <div className="text-sm">
                    <p className="text-gray-500">Primary Reason</p>
                    <p className="font-medium text-gray-900">{formData.reason || '-'}</p>
                    <p className="text-gray-500 mt-3">Description</p>
                    <p className="text-gray-900 mt-1">
                      {formData.description || 'No description provided'}
                    </p>
                  </div>
                </div>

                {/* Documents Summary */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Documents ({files.length})
                  </h3>
                  {files.length > 0 ? (
                    <ul className="text-sm space-y-1">
                      {files.map((file, index) => (
                        <li key={index} className="text-gray-700">
                          • {file.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">No documents uploaded</p>
                  )}
                </div>

                {/* Payment Summary */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Payment Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Bank Name</p>
                      <p className="font-medium text-gray-900">
                        {formData.bankName || '-'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Account Number</p>
                      <p className="font-medium text-gray-900">
                        {formData.accountNumber
                          ? `****${formData.accountNumber.slice(-4)}`
                          : '-'}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-500">Account Holder</p>
                      <p className="font-medium text-gray-900">
                        {formData.accountHolder || '-'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I confirm that the information provided is accurate and I agree to the{' '}
                    <a href="#" className="text-blue-700 hover:text-blue-800">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-700 hover:text-blue-800">
                      Refund Policy
                    </a>
                    .
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-blue-800 rounded-lg hover:bg-blue-900 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Submit Request
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

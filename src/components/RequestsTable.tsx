import React from 'react';
import { Eye } from 'lucide-react';
type RequestStatus = 'Pending' | 'Approved' | 'Rejected' | 'Under Review';
type Request = {
  id: string;
  serviceName: string;
  dateSubmitted: string;
  status: RequestStatus;
  amount: string;
};
const requests: Request[] = [{
  id: 'REF-2024-001',
  serviceName: 'Cloud Hosting Service',
  dateSubmitted: 'Jan 15, 2024',
  status: 'Pending',
  amount: '$1,250'
}, {
  id: 'REF-2024-007',
  serviceName: 'Data Backup Service',
  dateSubmitted: 'Jan 10, 2024',
  status: 'Approved',
  amount: '$850'
}, {
  id: 'REF-2024-012',
  serviceName: 'Email Hosting Service',
  dateSubmitted: 'Jan 5, 2024',
  status: 'Rejected',
  amount: '$600'
}];
const getStatusStyles = (status: RequestStatus) => {
  switch (status) {
    case 'Pending':
      return 'bg-amber-100 text-amber-700';
    case 'Approved':
      return 'bg-green-100 text-green-700';
    case 'Rejected':
      return 'bg-red-100 text-red-700';
    case 'Under Review':
      return 'bg-blue-50 text-blue-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};
export function RequestsTable() {
  return <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-medium">
              <th className="px-6 py-4">Request ID</th>
              <th className="px-6 py-4">Service Name</th>
              <th className="px-6 py-4">Date Submitted</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requests.map(req => <tr key={req.id} className="hover:bg-gray-50 transition-colors cursor-pointer h-[72px]" onClick={() => console.log(`Navigate to ${req.id}`)}>
                <td className="px-6 py-4 text-sm font-medium text-blue-800">
                  {req.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-[200px]">
                  {req.serviceName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {req.dateSubmitted}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(req.status)}`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  {req.amount}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-blue-800 bg-transparent hover:bg-blue-50 transition-colors" onClick={e => {
                e.stopPropagation();
                console.log(`View ${req.id}`);
              }}>
                    View
                  </button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-200">
        {requests.map(req => <div key={req.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => console.log(`Navigate to ${req.id}`)}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-sm font-medium text-blue-800 block mb-1">
                  {req.id}
                </span>
                <h3 className="text-sm font-medium text-gray-900">
                  {req.serviceName}
                </h3>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(req.status)}`}>
                {req.status}
              </span>
            </div>

            <div className="flex justify-between items-end mt-4">
              <div className="text-xs text-gray-500">
                Submitted {req.dateSubmitted}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-900">
                  {req.amount}
                </span>
                <button className="p-2 border border-gray-200 rounded-md text-blue-800 hover:bg-blue-50" onClick={e => {
              e.stopPropagation();
              console.log(`View ${req.id}`);
            }}>
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>)}
      </div>

      {/* Pagination Placeholder */}
      <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to{' '}
          <span className="font-medium">3</span> of{' '}
          <span className="font-medium">3</span> results
        </div>
        <div className="flex gap-2">
          <button disabled className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-400 cursor-not-allowed">
            Previous
          </button>
          <button disabled className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-400 cursor-not-allowed">
            Next
          </button>
        </div>
      </div>
    </div>;
}
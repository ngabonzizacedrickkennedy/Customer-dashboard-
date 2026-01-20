import React from 'react';
import { FileText, Clock, CheckCircle, XCircle, Plus } from 'lucide-react';
import { DashboardLayout } from '../components/DashboardLayout';
import { StatsCard } from '../components/StatsCard';
import { RequestsTable } from '../components/RequestsTable';
import { QuickLinks } from '../components/QuickLinks';
export function Dashboard() {
  return <DashboardLayout>
      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 pb-24 lg:pb-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Welcome back, Cedrick!
            </h1>
            <p className="text-gray-500 mt-1">
              Here's what's happening with your refund requests
            </p>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Tuesday, January 19, 2026
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard icon={FileText} label="Total Requests" value={5} description="All time requests" iconColor="text-blue-600" />
          <StatsCard icon={Clock} label="Pending" value={2} trend="↑ 1 new this week" bgColor="bg-amber-50" iconColor="text-amber-600" textColor="text-amber-700" />
          <StatsCard icon={CheckCircle} label="Approved" value={2} description="Total: $2,100" bgColor="bg-green-50" iconColor="text-green-600" textColor="text-green-700" />
          <StatsCard icon={XCircle} label="Rejected" value={1} description="Review available" bgColor="bg-red-50" iconColor="text-red-600" textColor="text-red-700" />
        </div>

        {/* Primary Action */}
        <div className="flex justify-center py-4">
          <button className="w-full md:w-[500px] h-14 bg-blue-800 hover:bg-blue-900 text-white rounded-lg shadow-md flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99]">
            <Plus className="w-6 h-6" />
            <span className="text-lg font-medium">
              Submit New Refund Request
            </span>
          </button>
        </div>

        {/* Recent Requests */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Requests
            </h2>
            <button className="text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline">
              View All
            </button>
          </div>
          <RequestsTable />
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <QuickLinks />
        </div>
      </div>
    </DashboardLayout>;
}
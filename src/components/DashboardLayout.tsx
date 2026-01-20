import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { Home, ClipboardList, MessageSquare, User, Plus } from 'lucide-react';
type DashboardLayoutProps = {
  children: ReactNode;
};
export function DashboardLayout({
  children
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <TopNav onMenuClick={() => setIsSidebarOpen(true)} />

      <main className="lg:ml-[240px] pt-16 min-h-screen">{children}</main>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around px-2 z-30 lg:hidden">
        <button className="flex flex-col items-center justify-center p-2 text-blue-800">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 text-gray-500 hover:text-gray-900">
          <ClipboardList className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Requests</span>
        </button>
        <div className="w-12"></div> {/* Spacer for FAB */}
        <button className="flex flex-col items-center justify-center p-2 text-gray-500 hover:text-gray-900">
          <MessageSquare className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Messages</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 text-gray-500 hover:text-gray-900">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Profile</span>
        </button>
        {/* Floating Action Button */}
        <button className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-blue-800 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-900 transition-colors" aria-label="New Request">
          <Plus className="w-8 h-8" />
        </button>
      </div>
    </div>;
}
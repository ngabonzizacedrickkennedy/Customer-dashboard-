import React, { useState } from 'react';
import { Menu, Search, Bell, ChevronDown, User, Settings, LayoutDashboard, MessageSquare, HelpCircle, LogOut } from 'lucide-react';
type TopNavProps = {
  onMenuClick: () => void;
};
export function TopNav({
  onMenuClick
}: TopNavProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  return <header className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-0 lg:left-[240px] z-30 px-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md" aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>

        <div className="lg:hidden flex items-center gap-2 border-r border-gray-200 pr-4 mr-4">
          <span className="font-semibold text-gray-900">RG Partners</span>
        </div>

        <h1 className="text-lg font-semibold text-gray-900 hidden sm:block">
          Dashboard
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:block relative w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input type="text" placeholder="Search requests, users..." className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-colors" />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative transition-colors" aria-label="Notifications">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1.5 right-1.5 block h-4 w-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              3
            </span>
          </button>

          {isNotificationsOpen && <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900">
                  Notifications
                </h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer">
                  <p className="text-sm text-gray-800">
                    Request <span className="font-medium">REF-2024-001</span> is
                    under review
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer">
                  <p className="text-sm text-gray-800">
                    Your request{' '}
                    <span className="font-medium">REF-2024-007</span> was
                    approved
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer">
                  <p className="text-sm text-gray-800">
                    New message from Support Team
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-gray-100 text-center">
                <button className="text-xs font-medium text-blue-700 hover:text-blue-800">
                  View All Notifications
                </button>
              </div>
            </div>}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center gap-2 p-1 hover:bg-gray-50 rounded-full transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white text-xs font-bold">
              CK
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500 hidden sm:block" />
          </button>

          {isUserMenuOpen && <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">
                  Cedrick Kennedy
                </p>
                <p className="text-xs text-gray-500 truncate">
                  cedrickngabo03@gmail.com
                </p>
                <span className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800">
                  Customer
                </span>
              </div>

              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <User className="w-4 h-4" /> My Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" /> My Dashboard
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Messages
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Help & Support
                </button>
              </div>

              <div className="border-t border-gray-100 py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </div>}
        </div>
      </div>
    </header>;
}
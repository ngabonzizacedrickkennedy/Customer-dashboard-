import React from 'react';
import { Home, Plus, ClipboardList, MessageSquare, User, LogOut, Hexagon } from 'lucide-react';
type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};
export function Sidebar({
  isOpen,
  onClose
}: SidebarProps) {
  const menuItems = [{
    icon: Home,
    label: 'Dashboard',
    active: true
  }, {
    icon: Plus,
    label: 'New Request',
    active: false
  }, {
    icon: ClipboardList,
    label: 'My Requests',
    active: false
  }, {
    icon: MessageSquare,
    label: 'Messages',
    active: false,
    badge: '2'
  }, {
    icon: User,
    label: 'Profile',
    active: false
  }];
  return <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden" onClick={onClose} aria-hidden="true" />}

      {/* Sidebar Container */}
      <aside className={`
          fixed top-0 left-0 z-50 h-full w-[240px] bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
        {/* Logo Area */}
        <div className="h-[80px] flex flex-col items-center justify-center border-b border-gray-200 px-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white">
              <Hexagon className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-gray-900">RG Partners</span>
          </div>
          <span className="text-xs text-gray-500">
            Refund Management System
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {menuItems.map(item => <li key={item.label}>
                <button className={`
                    w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors relative
                    ${item.active ? 'bg-blue-50 text-blue-800' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}>
                  {item.active && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-800" />}
                  <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-800' : 'text-gray-400'}`} />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {item.badge}
                    </span>}
                </button>
              </li>)}
          </ul>
        </nav>

        {/* User Info & Logout */}
        <div className="border-t border-gray-200 p-4 bg-gray-50/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold text-sm">
              CK
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                Cedrick Kennedy
              </p>
              <p className="text-xs text-gray-500 truncate">
                cedrickngabo03@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Customer
            </span>
            <button className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors" onClick={() => console.log('Logout')}>
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>;
}
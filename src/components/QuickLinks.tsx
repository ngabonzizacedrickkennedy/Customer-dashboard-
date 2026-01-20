import React from 'react';
import { HelpCircle, MessageCircle, FileDown, BoxIcon } from 'lucide-react';
type QuickLinkCardProps = {
  icon: BoxIcon;
  title: string;
  description: string;
  onClick?: () => void;
};
function QuickLinkCard({
  icon: Icon,
  title,
  description,
  onClick
}: QuickLinkCardProps) {
  return <button onClick={onClick} className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg w-full sm:w-[150px] h-[120px] hover:border-blue-700 hover:shadow-md transition-all duration-200 group text-center">
      <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-700 mb-3 transition-colors" />
      <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
        {title}
      </span>
      <span className="text-xs text-gray-500 mt-1">{description}</span>
    </button>;
}
export function QuickLinks() {
  return <div className="flex flex-wrap gap-4">
      <QuickLinkCard icon={HelpCircle} title="FAQ" description="Common questions" />
      <QuickLinkCard icon={MessageCircle} title="Support" description="Get help" />
      <QuickLinkCard icon={FileDown} title="Reports" description="Download history" />
    </div>;
}
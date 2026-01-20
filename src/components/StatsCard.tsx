import React from 'react';
import { BoxIcon } from 'lucide-react';
type StatsCardProps = {
  icon: BoxIcon;
  label: string;
  value: string | number;
  description?: string;
  trend?: string;
  bgColor?: string;
  iconColor?: string;
  textColor?: string;
};
export function StatsCard({
  icon: Icon,
  label,
  value,
  description,
  trend,
  bgColor = 'bg-white',
  iconColor = 'text-blue-800',
  textColor = 'text-gray-900'
}: StatsCardProps) {
  return <div className={`${bgColor} border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col h-full`}>
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {label}
        </span>
      </div>

      <div className={`text-5xl font-bold mb-2 ${textColor}`}>{value}</div>

      {(description || trend) && <div className="mt-auto pt-2 flex flex-col gap-1">
          {trend && <span className="text-sm font-medium text-gray-700">{trend}</span>}
          {description && <span className="text-xs text-gray-500">{description}</span>}
        </div>}
    </div>;
}
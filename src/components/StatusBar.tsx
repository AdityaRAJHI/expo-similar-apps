
import React from 'react';
import { Signal, Battery, Wifi } from 'lucide-react';

interface StatusBarProps {
  time?: string;
  darkIcons?: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({ 
  time = '9:41', 
  darkIcons = false 
}) => {
  const iconColor = darkIcons ? 'text-gray-800' : 'text-white';
  
  return (
    <div className="flex justify-between items-center p-2 h-7">
      <div className={iconColor}>{time}</div>
      <div className="flex items-center space-x-1">
        <Signal size={16} className={iconColor} />
        <Wifi size={16} className={iconColor} />
        <Battery size={16} className={iconColor} />
      </div>
    </div>
  );
};

export default StatusBar;

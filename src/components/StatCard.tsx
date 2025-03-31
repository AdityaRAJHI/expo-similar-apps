
import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg border mb-2">
      <div className="flex items-center">
        {icon && <div className="mr-2">{icon}</div>}
        <span className="text-gray-600">{label}</span>
      </div>
      <div className="font-medium">{value}</div>
    </div>
  );
};

export default StatCard;

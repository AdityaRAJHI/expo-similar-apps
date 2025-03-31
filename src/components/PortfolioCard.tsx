
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface PortfolioCardProps {
  balance: string;
  profit: {
    percentage: string;
    isPositive: boolean;
  };
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ balance, profit }) => {
  return (
    <div className="w-full bg-card-gradient rounded-2xl text-white p-6 shadow-md">
      <div className="opacity-80 text-sm mb-2">Current Balance</div>
      <div className="text-3xl font-bold mb-3">${balance}</div>
      <div className="flex items-center">
        <span className="text-sm opacity-80 mr-2">Weekly Profit</span>
        <div className={`flex items-center text-sm ${profit.isPositive ? 'text-green-300' : 'text-red-300'}`}>
          {profit.isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          <span className="ml-1">{profit.percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

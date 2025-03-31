
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CryptoItemProps {
  id: string;
  name: string;
  symbol: string;
  value: string;
  change: {
    percentage: string;
    isPositive: boolean;
  };
  icon: string;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ 
  id, 
  name, 
  symbol, 
  value, 
  change, 
  icon 
}) => {
  return (
    <Link to={`/crypto/${id}`} className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
          <img src={icon} alt={name} className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-gray-500">{symbol}</p>
        </div>
      </div>
      
      <div className="text-right">
        <p className="font-medium">{value}</p>
        <div className={`flex items-center justify-end text-xs ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change.isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          <span>{change.percentage}%</span>
        </div>
      </div>
    </Link>
  );
};

export default CryptoItem;

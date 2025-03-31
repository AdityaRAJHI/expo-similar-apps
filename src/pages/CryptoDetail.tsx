
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, DollarSign } from 'lucide-react';
import MobileLayout from '@/components/MobileLayout';
import PriceChart from '@/components/PriceChart';
import StatCard from '@/components/StatCard';

// Mock data for the chart
const generateChartData = () => {
  const data = [];
  let value = 44000;
  for (let i = 0; i < 30; i++) {
    // Random fluctuation
    value = value + Math.random() * 2000 - 1000;
    data.push({
      name: `Point ${i}`,
      value: value,
    });
  }
  return data;
};

const cryptoDetails = {
  bitcoin: {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '44,826.12',
    change: '2.35%',
    marketCap: '836,819',
    volume: '35,887',
    availableSupply: '18,784',
    maxSupply: '21,000',
  },
  ethereum: {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '2,412.56',
    change: '3.15%',
    marketCap: '290,412',
    volume: '18,564',
    availableSupply: '120,325',
    maxSupply: 'Unlimited',
  }
};

const CryptoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Default to Bitcoin if ID doesn't match
  const crypto = cryptoDetails[id as keyof typeof cryptoDetails] || cryptoDetails.bitcoin;
  const chartData = generateChartData();
  
  return (
    <MobileLayout showNavigation={false} className="pb-6">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Trade {crypto.name}</h1>
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-lg">⋮</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-lg font-bold">
              {crypto.symbol === 'BTC' ? '₿' : crypto.symbol === 'ETH' ? 'Ξ' : crypto.symbol}
            </span>
          </div>
          <div className="text-sm text-gray-500">{crypto.symbol}</div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-3xl font-bold">${crypto.price}</h2>
          <div className="text-green-600 text-sm">+{crypto.change}</div>
        </div>
        
        <PriceChart data={chartData} color="#4361EE" height={200} />
        
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-3">Statistics</h3>
          
          <StatCard 
            label="Current Price" 
            value={`$${crypto.price}`}
          />
          
          <StatCard 
            label="Market Cap" 
            value={`$${crypto.marketCap}`}
            icon={<DollarSign size={16} className="text-crypto-blue" />}
          />
          
          <StatCard 
            label="Volume 24h" 
            value={`$${crypto.volume}`}
          />
          
          <StatCard 
            label="Available Supply" 
            value={crypto.availableSupply}
          />
          
          <StatCard 
            label="Max Supply" 
            value={crypto.maxSupply}
          />
        </div>
        
        <div className="flex space-x-4 mt-6">
          <button className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium">
            Sell
          </button>
          <button className="flex-1 bg-crypto-blue text-white py-3 rounded-lg font-medium">
            Buy
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default CryptoDetail;

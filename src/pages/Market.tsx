
import React from 'react';
import { BarChart2, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import MobileLayout from '@/components/MobileLayout';
import StatusBar from '@/components/StatusBar';
import StatCard from '@/components/StatCard';

const marketTrends = [
  {
    label: "Market Cap",
    value: "$1.94T",
    icon: <DollarSign className="text-crypto-blue" size={20} />
  },
  {
    label: "24h Volume",
    value: "$78.5B",
    icon: <BarChart2 className="text-crypto-blue" size={20} />
  },
  {
    label: "Top Gainer",
    value: "SOL +8.2%",
    icon: <TrendingUp className="text-green-500" size={20} />
  },
  {
    label: "Top Loser",
    value: "DOT -3.5%",
    icon: <TrendingDown className="text-red-500" size={20} />
  }
];

const marketCategories = [
  { name: "Trending", count: 15 },
  { name: "DeFi", count: 42 },
  { name: "NFTs", count: 28 },
  { name: "Metaverse", count: 19 },
  { name: "Layer 2", count: 22 },
  { name: "GameFi", count: 31 }
];

const Market = () => {
  return (
    <MobileLayout>
      <div className="p-4 pb-20">
        <StatusBar darkIcons={true} />
        
        <h1 className="text-2xl font-bold mt-4 mb-6">Market Overview</h1>
        
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-3">
            {marketTrends.map((trend, index) => (
              <StatCard
                key={index}
                label={trend.label}
                value={trend.value}
                icon={trend.icon}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {marketCategories.map((category) => (
              <div key={category.name} className="px-4 py-2 bg-gray-100 rounded-full flex items-center">
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 text-xs bg-crypto-blue text-white rounded-full px-2 py-0.5">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-3">Top Movers</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <p className="font-medium">Crypto #{item}</p>
                    <p className="text-sm text-gray-500">$123.45</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-medium">$45,678</p>
                  <p className={`text-sm ${item % 2 ? 'text-green-500' : 'text-red-500'}`}>
                    {item % 2 ? '+5.67%' : '-2.34%'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Market;

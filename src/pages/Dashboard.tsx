
import React, { useState } from 'react';
import MobileLayout from '@/components/MobileLayout';
import StatusBar from '@/components/StatusBar';
import PortfolioCard from '@/components/PortfolioCard';
import CryptoItem from '@/components/CryptoItem';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from 'react-router-dom';

const mockCryptos = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    value: '1,132,151',
    change: {
      percentage: '2.35',
      isPositive: true,
    },
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    value: '1,132,151',
    change: {
      percentage: '2.65',
      isPositive: true,
    },
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  },
  {
    id: 'tether',
    name: 'Tether',
    symbol: 'USDT',
    value: '0.99',
    change: {
      percentage: '0.02',
      isPositive: false,
    },
    icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  },
  {
    id: 'binance-coin',
    name: 'Binance Coin',
    symbol: 'BNB',
    value: '46,525.32',
    change: {
      percentage: '1.86',
      isPositive: true,
    },
    icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
  },
];

const Dashboard = () => {
  const [profileImage, setProfileImage] = useState("https://randomuser.me/api/portraits/women/42.jpg");

  return (
    <MobileLayout>
      <div className="p-4">
        <StatusBar darkIcons={true} />
        
        <div className="flex justify-between items-center mt-2 mb-4">
          <div>
            <h2 className="font-medium text-lg">Nora Johnson</h2>
            <p className="text-sm text-gray-500">Welcome Back 👋</p>
          </div>
          
          <Link to="/settings">
            <Avatar className="h-12 w-12 border-2 border-crypto-blue">
              <AvatarImage src={profileImage} alt="User avatar" />
              <AvatarFallback>NJ</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        
        <PortfolioCard 
          balance="143,421.20" 
          profit={{ 
            percentage: "2.35", 
            isPositive: true 
          }}
        />
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg">My Portfolio</h2>
            <Link to="/market" className="text-crypto-blue text-sm">View all</Link>
          </div>
          
          <div className="space-y-2">
            {mockCryptos.map((crypto) => (
              <CryptoItem 
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                value={crypto.value}
                change={crypto.change}
                icon={crypto.icon}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Add padding at the bottom to account for the navigation bar */}
      <div className="h-20"></div>
    </MobileLayout>
  );
};

export default Dashboard;

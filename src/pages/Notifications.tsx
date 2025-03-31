
import React from 'react';
import { Bell, Info, ArrowUpRight, ArrowDownRight, Award, AlertTriangle } from 'lucide-react';
import MobileLayout from '@/components/MobileLayout';
import StatusBar from '@/components/StatusBar';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'price' | 'award' | 'alert';
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Bitcoin up by 5%",
    message: "BTC price increased by 5% in the last 24 hours.",
    time: "5 min ago",
    read: false,
    type: "price"
  },
  {
    id: 2,
    title: "Weekly Report",
    message: "Your weekly portfolio report is now available.",
    time: "2 hours ago",
    read: false,
    type: "info"
  },
  {
    id: 3,
    title: "Achievement Unlocked!",
    message: "You've completed 10 transactions this month.",
    time: "1 day ago",
    read: true,
    type: "award"
  },
  {
    id: 4,
    title: "Market Alert",
    message: "Unusual market volatility detected. Consider adjusting your positions.",
    time: "2 days ago",
    read: true,
    type: "alert"
  },
  {
    id: 5,
    title: "Ethereum down by 3%",
    message: "ETH price decreased by 3% in the last 24 hours.",
    time: "3 days ago",
    read: true,
    type: "price"
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'info':
      return <Info size={20} className="text-blue-500" />;
    case 'price':
      return type === 'up' ? 
        <ArrowUpRight size={20} className="text-green-500" /> : 
        <ArrowDownRight size={20} className="text-red-500" />;
    case 'award':
      return <Award size={20} className="text-yellow-500" />;
    case 'alert':
      return <AlertTriangle size={20} className="text-red-500" />;
    default:
      return <Bell size={20} className="text-gray-500" />;
  }
};

const Notifications = () => {
  return (
    <MobileLayout>
      <div className="p-4 pb-20">
        <StatusBar darkIcons={true} />
        
        <div className="flex justify-between items-center mt-2 mb-4">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <button className="text-crypto-blue text-sm">Mark all as read</button>
        </div>
        
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-4 rounded-lg border ${notification.read ? 'bg-white' : 'bg-blue-50 border-blue-100'}`}
            >
              <div className="flex">
                <div className="mr-3">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10">
            <Bell size={48} className="text-gray-300 mb-4" />
            <p className="text-gray-500">No notifications yet</p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default Notifications;

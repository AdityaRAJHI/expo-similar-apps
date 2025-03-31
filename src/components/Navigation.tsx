
import { Home, BarChart2, Bell, Settings, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto h-16 bg-white border-t flex items-center justify-around px-4">
      <Link to="/dashboard" className={`flex flex-col items-center ${isActive('/dashboard') ? 'text-crypto-blue' : 'text-gray-400'}`}>
        <Home size={22} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      
      <Link to="/market" className={`flex flex-col items-center ${isActive('/market') ? 'text-crypto-blue' : 'text-gray-400'}`}>
        <BarChart2 size={22} />
        <span className="text-xs mt-1">Market</span>
      </Link>
      
      <div className="relative -top-5">
        <Link to="/dashboard" className="h-14 w-14 rounded-full bg-crypto-blue text-white flex items-center justify-center shadow-lg">
          <Plus size={26} />
        </Link>
      </div>
      
      <Link to="/notifications" className={`flex flex-col items-center ${isActive('/notifications') ? 'text-crypto-blue' : 'text-gray-400'}`}>
        <Bell size={22} />
        <span className="text-xs mt-1">Notifications</span>
      </Link>
      
      <Link to="/settings" className={`flex flex-col items-center ${isActive('/settings') ? 'text-crypto-blue' : 'text-gray-400'}`}>
        <Settings size={22} />
        <span className="text-xs mt-1">Settings</span>
      </Link>
    </div>
  );
};

export default Navigation;

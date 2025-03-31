
import React from 'react';
import Navigation from './Navigation';

interface MobileLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  className?: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ 
  children, 
  showNavigation = true,
  className = ""
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`mobile-container bg-white ${className}`}>
        {children}
        
        {showNavigation && <Navigation />}
      </div>
    </div>
  );
};

export default MobileLayout;

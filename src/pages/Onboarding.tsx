
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StatusBar from '@/components/StatusBar';

const Onboarding = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen bg-onboarding-gradient text-white relative overflow-hidden">
      <StatusBar />
      
      <div className="relative z-10 flex flex-col justify-between h-[calc(100vh-28px)] p-6 pb-10">
        {/* Animated coins */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-crypto-light-blue bg-opacity-30 blur-lg absolute top-0 left-0 animate-pulse"></div>
            
            <div className="animate-float h-20 w-20 rounded-full bg-[#5A8DE6] shadow-lg absolute -left-10 top-8 grid place-items-center">
              <div className="h-16 w-16 rounded-full bg-[#7B91FF] border-4 border-white/20 grid place-items-center">
                <img src="/lovable-uploads/e2c57333-f7d5-4163-9c7d-d5576aaf3be5.png" alt="Ethereum" className="h-14 w-14 object-contain" />
              </div>
            </div>
            
            <div className="animate-float delay-300 h-16 w-16 rounded-full bg-[#E5C687] shadow-lg absolute left-10 -top-5 grid place-items-center">
              <div className="h-12 w-12 rounded-full bg-[#FFDA58] border-4 border-white/20 grid place-items-center">
                <span className="text-2xl font-bold">₿</span>
              </div>
            </div>
            
            <div className="animate-float delay-700 h-12 w-12 rounded-full bg-[#4CBF73] shadow-lg absolute left-16 top-14 grid place-items-center">
              <div className="h-9 w-9 rounded-full bg-[#55D17F] border-4 border-white/20 grid place-items-center">
                <span className="text-lg font-bold">$</span>
              </div>
            </div>
          </div>
        </div>
        
        <div></div>
        
        <div className="text-center mt-auto">
          <h1 className="text-3xl font-bold mb-2">Easy Way to Invest in Crypto</h1>
          <p className="text-white/80 mb-8">
            A new way to manage and trade all your crypto easily and fastest in the market
          </p>
          
          <button 
            onClick={handleGetStarted}
            className="h-14 w-14 rounded-full bg-white text-crypto-blue mx-auto flex items-center justify-center"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;


import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface PriceChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
  color?: string;
  height?: number;
}

const PriceChart: React.FC<PriceChartProps> = ({ 
  data, 
  color = "#4361EE", 
  height = 200
}) => {
  const [timeframe, setTimeframe] = useState('1h');
  
  const timeframeOptions = [
    { id: '1h', label: '1h' },
    { id: '1d', label: '1d' },
    { id: '1w', label: '1w' },
    { id: '1m', label: '1m' },
    { id: '1y', label: '1y' },
  ];

  return (
    <div>
      <div className="flex justify-between mb-3">
        {timeframeOptions.map((option) => (
          <button 
            key={option.id}
            className={`px-3 py-1 text-sm rounded-md ${timeframe === option.id ? 'bg-gray-100 font-medium' : 'text-gray-500'}`}
            onClick={() => setTimeframe(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      
      <div className="line-chart-container">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide />
            <YAxis domain={['dataMin - 2000', 'dataMax + 2000']} hide />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
              labelFormatter={(value) => `Time: ${value}`}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 0 }}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceChart;

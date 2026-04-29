'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendData } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/api';

interface SpendingTrendProps {
  data: TrendData[];
}

export const SpendingTrend: React.FC<SpendingTrendProps> = ({ data }) => {
  // Format data for chart
  const chartData = data.map((item) => ({
    ...item,
    dateLabel: formatDate(item.date),
  }));

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Trend Over Time</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="dateLabel"
            angle={-45}
            textAnchor="end"
            height={80}
            interval={Math.floor(chartData.length / 8)}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            labelFormatter={(label: string) => `Date: ${label}`}
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#3b82f6"
            dot={false}
            name="Daily Spending"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

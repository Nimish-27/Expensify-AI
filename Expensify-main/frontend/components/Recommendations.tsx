'use client';

import React from 'react';
import { Recommendation, CostTip } from '@/lib/types';
import { getPriorityColor } from '@/lib/api';

interface RecommendationsProps {
  recommendations: Recommendation[];
}

export const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
  const getPriorityBadgeColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return '🔴';
      case 'medium':
        return '🟡';
      case 'low':
        return '🟢';
      default:
        return '⚪';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recommendations</h3>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityBadgeColor(rec.priority)}`}>
                    {rec.priority.toUpperCase()} {getPriorityIcon(rec.priority)}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{rec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface CostOptimizationProps {
  tips: CostTip[];
}

export const CostOptimization: React.FC<CostOptimizationProps> = ({ tips }) => {
  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Cost Optimization Tips</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="font-semibold text-gray-900 text-sm">{tip.tip}</h4>
              <span className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ${getImpactColor(tip.impact)}`}>
                {tip.impact} impact
              </span>
            </div>
            <p className="text-gray-600 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

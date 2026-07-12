'use client';

import React from 'react';
import { Violation } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/api';

interface ViolationsProps {
  violations: Violation[];
  title?: string;
}

export const ViolationsTable: React.FC<ViolationsProps> = ({ 
  violations, 
  title = 'Policy Violations' 
}) => {
  if (violations.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-500 text-center py-8">No violations found</p>
      </div>
    );
  }

  const getViolationColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'critical':
        return 'bg-red-50 border-l-4 border-red-500';
      case 'budget_exceeded':
        return 'bg-orange-50 border-l-4 border-orange-500';
      case 'moderate':
        return 'bg-yellow-50 border-l-4 border-yellow-500';
      case 'minor':
        return 'bg-blue-50 border-l-4 border-blue-500';
      default:
        return 'bg-gray-50 border-l-4 border-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Employee</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
            </tr>
          </thead>
          <tbody>
            {violations.map((violation, index) => (
              <tr key={index} className={`border-b border-gray-100 ${getViolationColor(violation.violation_type)}`}>
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">{violation.employee}</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                  {formatCurrency(violation.amount)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 capitalize">{violation.category}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {formatDate(violation.date)}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                    {violation.violation_type.replace('_', ' ').toUpperCase()}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{violation.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import { CategoryBreakdown } from '@/lib/types';
import { formatCurrency, formatPercentage } from '@/lib/api';

interface CategoryBreakdownProps {
  categories: Record<string, CategoryBreakdown>;
}

export const CategoryBreakdownTable: React.FC<CategoryBreakdownProps> = ({ categories }) => {
  const categoryEntries = Object.entries(categories).sort((a, b) => b[1].total - a[1].total);

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Breakdown</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Total</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Count</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Average</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {categoryEntries.map(([category, data]) => (
              <tr key={category} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 capitalize">{category}</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                  {formatCurrency(data.total)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{data.count}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {formatCurrency(data.average)}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                  {data.percentage.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface DepartmentBreakdownProps {
  departments: Record<string, CategoryBreakdown>;
}

export const DepartmentBreakdownTable: React.FC<DepartmentBreakdownProps> = ({ departments }) => {
  const deptEntries = Object.entries(departments).sort((a, b) => b[1].total - a[1].total);

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Breakdown</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Department</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Total</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Count</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Average</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {deptEntries.map(([dept, data]) => (
              <tr key={dept} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{dept}</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                  {formatCurrency(data.total)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{data.count}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {formatCurrency(data.average)}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                  {data.percentage.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

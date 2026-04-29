'use client';

import React from 'react';
import { formatCurrency, formatPercentage } from '@/lib/api';
import { CategoryBreakdown } from '@/lib/types';

interface SummaryCardsProps {
  totalRecords: number;
  totalExpense: number;
  averageExpense: number;
  medianExpense: number;
  overallRisk: string;
  totalViolations: number;
  uniqueEmployees: number;
  dateRange: {
    start: string;
    end: string;
    days: number;
  };
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({
  totalRecords,
  totalExpense,
  averageExpense,
  medianExpense,
  overallRisk,
  totalViolations,
  uniqueEmployees,
  dateRange,
}) => {
  const getRiskBadgeColor = (risk: string) => {
    const riskLower = risk.toLowerCase();
    switch (riskLower) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Expense</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              {formatCurrency(totalExpense)}
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.16 5a.75.75 0 00-.712 1.05l1.952 5.183a.75.75 0 001.712 0l1.952-5.183a.75.75 0 00-.712-1.05H8.16z" />
              <path fillRule="evenodd" d="M12.168 13.312a.75.75 0 11-1.336.672l-.857 1.714a.75.75 0 001.342.672l.85-1.714zM7.832 13.312a.75.75 0 10-1.336.672l-.857 1.714a.75.75 0 001.342.672l.85-1.714z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Records</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{totalRecords}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM5 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Average Expense</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              {formatCurrency(averageExpense)}
            </p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Risk Level</p>
            <p className={`text-lg font-bold mt-2 px-3 py-1 rounded-full w-fit ${getRiskBadgeColor(overallRisk)}`}>
              {overallRisk.charAt(0).toUpperCase() + overallRisk.slice(1)}
            </p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Violations</p>
            <p className="text-2xl font-bold text-red-600 mt-2">{totalViolations}</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Employees</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{uniqueEmployees}</p>
          </div>
          <div className="bg-indigo-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.5m-11-5v3.75a.75.75 0 001.5 0V1.5m4 0v3.75a.75.75 0 001.5 0V1.5M3.5 7h13" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Date Range</p>
            <p className="text-sm font-bold text-gray-900 mt-2">
              {new Date(dateRange.start).toLocaleDateString()} - {new Date(dateRange.end).toLocaleDateString()}
            </p>
            <p className="text-xs text-gray-500 mt-1">{dateRange.days} days</p>
          </div>
          <div className="bg-cyan-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Median Expense</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              {formatCurrency(medianExpense)}
            </p>
          </div>
          <div className="bg-pink-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v-6a1.5 1.5 0 01-3 0v6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.256 8H6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

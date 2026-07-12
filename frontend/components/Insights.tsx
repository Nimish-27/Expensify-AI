'use client';

import React from 'react';
import { FinancialInsight, Anomaly, FraudSignal } from '@/lib/types';
import { formatCurrency, formatPercentage } from '@/lib/api';

interface InsightsProps {
  insights: FinancialInsight[];
}

export const FinancialInsights: React.FC<InsightsProps> = ({ insights }) => {
  const formatInsightDetail = (detail: any) => {
    if (typeof detail === 'number') {
      return formatCurrency(detail);
    }
    if (Array.isArray(detail)) {
      return detail.join(', ');
    }
    if (typeof detail === 'object') {
      return JSON.stringify(detail);
    }
    return String(detail);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Financial Insights</h3>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
            <h4 className="font-semibold text-gray-900 capitalize mb-2">
              {insight.type.replace('_', ' ')}
            </h4>
            <p className="text-gray-700 text-sm mb-2">{insight.description}</p>
            {insight.details && (
              <div className="text-sm text-gray-600">
                {Array.isArray(insight.details) ? (
                  <ul className="list-disc list-inside">
                    {insight.details.map((detail: any, idx: number) =>
                      Array.isArray(detail) ? (
                        <li key={idx}>
                          <strong>{detail[0]}:</strong> {formatCurrency(detail[1])}
                        </li>
                      ) : (
                        <li key={idx}>{formatInsightDetail(detail)}</li>
                      )
                    )}
                  </ul>
                ) : typeof insight.details === 'object' ? (
                  <div className="space-y-1">
                    {Object.entries(insight.details).map(([key, value]: [string, any]) => (
                      <div key={key}>
                        <strong className="capitalize">{key}:</strong> {formatCurrency(value)}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
            {insight.amount && (
              <div className="text-sm font-semibold text-purple-900 mt-2">
                Amount: {formatCurrency(insight.amount)}
                {insight.percentage && ` (${formatPercentage(insight.percentage / 100)})`}
              </div>
            )}
            {insight.count && (
              <div className="text-sm font-semibold text-purple-900 mt-2">
                Count: {insight.count}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

interface AnomaliesProps {
  anomalies: Anomaly[];
}

export const Anomalies: React.FC<AnomaliesProps> = ({ anomalies }) => {
  if (anomalies.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Anomalies</h3>
        <p className="text-gray-500 text-center py-8">No anomalies detected</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Detected Anomalies</h3>
      <div className="space-y-4">
        {anomalies.map((anomaly, index) => (
          <div key={index} className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold text-gray-900 capitalize">
                  {anomaly.type.replace('_', ' ')}
                </h4>
                <p className="text-gray-700 text-sm mt-1">{anomaly.description}</p>
                {anomaly.category && (
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Category:</strong> {anomaly.category}
                  </p>
                )}
                {anomaly.amount && (
                  <p className="text-sm font-semibold text-orange-900 mt-1">
                    Amount: {formatCurrency(anomaly.amount)}
                  </p>
                )}
                {anomaly.concentration && (
                  <p className="text-sm font-semibold text-orange-900 mt-1">
                    Concentration: {formatPercentage(anomaly.concentration)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface FraudSignalsProps {
  signals: FraudSignal[];
}

export const FraudSignals: React.FC<FraudSignalsProps> = ({ signals }) => {
  if (signals.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fraud Signals</h3>
        <p className="text-gray-500 text-center py-8">No fraud signals detected</p>
      </div>
    );
  }

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'bg-red-50 border-l-4 border-red-500';
      case 'high':
        return 'bg-orange-50 border-l-4 border-orange-500';
      case 'medium':
        return 'bg-yellow-50 border-l-4 border-yellow-500';
      case 'low':
        return 'bg-green-50 border-l-4 border-green-500';
      default:
        return 'bg-gray-50 border-l-4 border-gray-500';
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity.toLowerCase()) {
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
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Fraud Signals</h3>
      <div className="space-y-4">
        {signals.map((signal, index) => (
          <div key={index} className={`${getSeverityColor(signal.severity)} p-4 rounded-r-lg`}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="font-semibold text-gray-900 capitalize">
                {signal.type.replace('_', ' ')}
              </h4>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSeverityBadgeColor(signal.severity)}`}>
                {signal.severity.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-2">{signal.description}</p>
            {signal.count && (
              <p className="text-sm font-semibold text-gray-900">Count: {signal.count}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

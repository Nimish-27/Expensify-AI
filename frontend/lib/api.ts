import axios from 'axios';
import { AuditResponse } from './types';

const API_BASE_URL = 'http://localhost:8000';

export const submitCsvFile = async (file: File): Promise<AuditResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post<AuditResponse>(
    `${API_BASE_URL}/api/full-audit`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const getRiskColor = (risk: string): string => {
  const riskLower = risk.toLowerCase();
  switch (riskLower) {
    case 'critical':
      return '#dc2626';
    case 'high':
      return '#f97316';
    case 'medium':
      return '#eab308';
    case 'low':
      return '#22c55e';
    default:
      return '#6b7280';
  }
};

export const getPriorityColor = (priority: string): string => {
  const priorityLower = priority.toLowerCase();
  switch (priorityLower) {
    case 'high':
      return '#dc2626';
    case 'medium':
      return '#f97316';
    case 'low':
      return '#22c55e';
    default:
      return '#6b7280';
  }
};

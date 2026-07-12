'use client';

import React, { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';
import { SummaryCards } from '@/components/SummaryCards';
import { Charts } from '@/components/Charts';
import { SpendingTrend } from '@/components/SpendingTrend';
import { ViolationsTable } from '@/components/ViolationsTable';
import { CategoryBreakdownTable, DepartmentBreakdownTable } from '@/components/BreakdownTables';
import { Recommendations, CostOptimization } from '@/components/Recommendations';
import { FinancialInsights, Anomalies, FraudSignals } from '@/components/Insights';
import { submitCsvFile } from '@/lib/api';
import { AuditResponse } from '@/lib/types';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [auditReport, setAuditReport] = useState<AuditResponse | null>(null);

  const handleFileSelect = async (file: File) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await submitCsvFile(file);
      setAuditReport(response);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process file';
      setError(errorMessage);
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900">Expense Audit System</h1>
          <p className="text-gray-600 mt-2">Upload CSV files to analyze expenses and detect policy violations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* File Upload Section */}
        {!auditReport ? (
          <div className="flex flex-col items-center justify-center py-16">
            <FileUpload onFileSelect={handleFileSelect} isLoading={isLoading} />
            {isLoading && (
              <div className="mt-8 flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-gray-600 font-medium">Processing your expense file...</p>
              </div>
            )}
            {error && (
              <div className="mt-6 w-full max-w-2xl bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-semibold">Error</p>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Reset Button */}
            <div className="mb-6">
              <button
                onClick={() => {
                  setAuditReport(null);
                  setError(null);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Upload Another File
              </button>
            </div>

            {/* Executive Summary */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-3">Executive Summary</h2>
              <p className="text-blue-50 leading-relaxed">
                {auditReport.report.executive_summary}
              </p>
            </div>

            {/* Summary Cards */}
            <SummaryCards
              totalRecords={auditReport.report.processing.total_records}
              totalExpense={auditReport.report.processing.preparation.summary.total_expense}
              averageExpense={auditReport.report.processing.preparation.summary.average_expense}
              medianExpense={auditReport.report.processing.preparation.summary.median_expense}
              overallRisk={auditReport.report.audit_analysis.risk_assessment.overall_risk}
              totalViolations={auditReport.report.audit_analysis.violation_analysis.total_violations}
              uniqueEmployees={auditReport.report.processing.preparation.summary.unique_employees}
              dateRange={auditReport.report.processing.preparation.summary.date_range}
            />

            {/* Charts */}
            <Charts
              categoryDistribution={auditReport.report.audit_analysis.visualization.category_distribution}
              topSpenders={auditReport.report.audit_analysis.visualization.top_spenders}
            />

            {/* Spending Trend */}
            <SpendingTrend data={auditReport.report.audit_analysis.visualization.spending_trend} />

            {/* Category and Department Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div>
                <CategoryBreakdownTable
                  categories={auditReport.report.processing.preparation.summary.category_breakdown}
                />
              </div>
              <div>
                <DepartmentBreakdownTable
                  departments={auditReport.report.processing.preparation.summary.department_breakdown}
                />
              </div>
            </div>

            {/* Violations */}
            <ViolationsTable
              violations={auditReport.report.audit_analysis.violation_analysis.critical}
              title="Critical Policy Violations"
            />

            {/* Anomalies */}
            <Anomalies anomalies={auditReport.report.audit_analysis.anomalies} />

            {/* Fraud Signals */}
            <FraudSignals signals={auditReport.report.audit_analysis.fraud_signals} />

            {/* Financial Insights */}
            <FinancialInsights insights={auditReport.report.audit_analysis.financial_insights} />

            {/* Recommendations */}
            <Recommendations recommendations={auditReport.report.audit_analysis.recommendations} />

            {/* Cost Optimization */}
            <CostOptimization tips={auditReport.report.audit_analysis.cost_optimization_tips} />

            {/* Final Summary */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-6 mt-8 text-white">
              <h2 className="text-2xl font-bold mb-3">Audit Summary</h2>
              <p className="text-green-50 leading-relaxed">
                {auditReport.report.audit_analysis.final_audit_summary}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

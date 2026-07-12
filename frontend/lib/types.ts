export interface AuditResponse {
  status: string;
  message: string;
  report: {
    processing: {
      timestamp: string;
      total_records: number;
      preparation: {
        status: string;
        summary: {
          total_records: number;
          total_expense: number;
          average_expense: number;
          median_expense: number;
          max_expense: number;
          min_expense: number;
          std_deviation: number;
          category_breakdown: Record<string, CategoryBreakdown>;
          department_breakdown: Record<string, DepartmentBreakdown>;
          employee_level_distribution: Record<string, LevelDistribution>;
          spending_level_distribution: Record<string, LevelDistribution>;
          risk_distribution: Record<string, RiskDistribution>;
          unique_employees: number;
          unique_vendors: number;
          unique_categories: number;
          date_range: {
            start: string;
            end: string;
            days: number;
          };
          cleaning_statistics: CleaningStats;
          enrichment_statistics: EnrichmentStats;
        };
        flags: {
          high_value_transactions: Transaction[];
          risk_transactions: Transaction[];
          policy_violation_candidates: Transaction[];
          potential_duplicates: any[];
          frequent_spenders: any[];
        };
      };
    };
    audit_analysis: {
      risk_assessment: {
        overall_risk: string;
        confidence_score: number;
        key_risks: string[];
      };
      violation_analysis: {
        total_violations: number;
        critical: Violation[];
        moderate: Violation[];
        minor: Violation[];
        repeat_offenders: any[];
      };
      anomalies: Anomaly[];
      fraud_signals: FraudSignal[];
      financial_insights: FinancialInsight[];
      recommendations: Recommendation[];
      cost_optimization_tips: CostTip[];
      visualization: {
        category_distribution: ChartData[];
        department_distribution: ChartData[];
        spending_trend: TrendData[];
        top_spenders: TopSpender[];
        violation_breakdown: ViolationBreakdown[];
      };
      final_audit_summary: string;
    };
    executive_summary: string;
  };
}

export interface CategoryBreakdown {
  total: number;
  count: number;
  average: number;
  percentage: number;
}

export interface DepartmentBreakdown {
  total: number;
  count: number;
  average: number;
  percentage: number;
}

export interface LevelDistribution {
  total: number;
  count: number;
  average: number;
  percentage: number;
}

export interface RiskDistribution {
  total: number;
  count: number;
  average: number;
  percentage: number;
}

export interface CleaningStats {
  duplicates_removed: number;
  rows_with_nulls_dropped: number;
  invalid_dates: number;
  invalid_amounts: number;
  invalid_employees: number;
  warnings: string[];
}

export interface EnrichmentStats {
  high_value_transactions: number;
  risk_transactions: number;
  frequent_spenders: number;
  policy_violation_candidates: number;
}

export interface Transaction {
  employee: string;
  amount: number;
  category: string;
  vendor: string;
  date: string;
  level: string;
  risk: string;
}

export interface Violation {
  employee: string;
  amount: number;
  category: string;
  date: string;
  violation_type: string;
  description: string;
}

export interface Anomaly {
  type: string;
  [key: string]: any;
}

export interface FraudSignal {
  type: string;
  severity: string;
  count: number;
  description: string;
  transactions?: Violation[];
}

export interface FinancialInsight {
  type: string;
  description: string;
  [key: string]: any;
}

export interface Recommendation {
  title: string;
  description: string;
  priority: string;
}

export interface CostTip {
  tip: string;
  impact: string;
  description: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface TrendData {
  date: string;
  amount: number;
}

export interface TopSpender {
  employee: string;
  amount: number;
}

export interface ViolationBreakdown {
  type: string;
  count: number;
}

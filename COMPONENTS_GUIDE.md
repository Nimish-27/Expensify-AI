# 📚 Components Guide - AI Expense Auditor

Complete documentation of all React components in the frontend application.

---

## 🏗️ Component Hierarchy

```
RootLayout (layout.tsx)
│
├─ Home Page (page.tsx)
│  └─ UploadForm
│
├─ Analyzing Page (analyzing/page.tsx)
│  └─ Loader
│
└─ Dashboard Page (dashboard/page.tsx)
   └─ Dashboard
      ├─ SummaryCards
      ├─ Charts
      │  ├─ PieChart (Category Distribution)
      │  ├─ LineChart (Spending Trend)
      │  └─ BarChart (Violation Breakdown)
      ├─ ViolationsTable
      ├─ FraudSignals
      │  ├─ Fraud Signals
      │  └─ Anomalies
      ├─ Recommendations
      └─ Tips
```

---

## 🎯 Base UI Components (`lib/ui.tsx`)

### Card

Styled container component for grouping content.

**Props**:
```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
```

**Usage**:
```typescript
<Card className="custom-class">
  <h2>Title</h2>
  <p>Content</p>
</Card>
```

**Features**:
- Dark theme styling (slate-800/50 background)
- Border with opacity
- Backdrop blur effect
- Rounded corners
- Padding (p-6)

---

### Button

Interactive button component with multiple variants.

**Props**:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}
```

**Variants**:
| Variant | Style |
|---------|-------|
| default | Blue background, white text |
| secondary | Dark slate background |
| destructive | Red background |
| outline | Border with transparent background |
| ghost | Transparent with hover effect |

**Sizes**:
| Size | Height |
|------|--------|
| default | h-10 |
| sm | h-9 |
| lg | h-11 |
| icon | h-10 w-10 |

**Usage**:
```typescript
<Button variant="default" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

---

### Badge

Small label component for status indicators.

**Usage**:
```typescript
<Badge className="bg-slate-700/50 text-slate-200">
  Status
</Badge>
```

---

### Table Components

Set of components for building data tables.

**Components**:
- `Table` - Wrapper
- `TableHeader` - Header row container
- `TableBody` - Body rows container
- `TableRow` - Individual row
- `TableHead` - Header cell
- `TableCell` - Data cell

**Usage**:
```typescript
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## 📄 Page Components

### UploadForm (`components/UploadForm.tsx`)

File upload component with drag-and-drop support.

**Features**:
- Drag-and-drop area
- Click to browse files
- CSV validation
- File size limit (50MB)
- Error handling
- Selected file display
- Animated hover states

**Usage**:
```typescript
import { UploadForm } from "@/components/UploadForm"

export default function Home() {
  return <UploadForm />
}
```

**State Management**:
Uses Zustand store:
- `setFile()` - Store selected file
- Routes to `/analyzing` on submit

**Validation**:
- File extension: `.csv` only
- File size: max 50MB
- Error messages displayed to user

---

### Loader (`components/Loader.tsx`)

Animated loading screen with step-by-step progress.

**Features**:
- 5-step progress indicator
- Rotating spinner animation
- Percentage display
- Smooth progress bar
- Step completion icons
- Auto-progression

**Steps**:
1. Validating data...
2. Cleaning data...
3. Applying policies...
4. Running AI analysis...
5. Generating report...

**Usage**:
```typescript
import { Loader } from "@/components/Loader"

export default function AnalyzingPage() {
  return <Loader />
}
```

**State Management**:
- `currentStep` - Current progress step (0-5)
- `totalSteps` - Total steps (5)
- Increments via `incrementStep()`

---

### SummaryCards (`components/SummaryCards.tsx`)

4-card grid displaying key metrics.

**Props**:
```typescript
interface SummaryCardsProps {
  report: AuditReport
}
```

**Cards Displayed**:
1. **Total Expense** - Total spending amount (Cyan)
2. **Total Records** - Number of transactions (Blue)
3. **Overall Risk** - Risk level assessment (Dynamic color)
4. **Confidence Score** - AI confidence percentage (Amber)

**Data Sources**:
- `report.processing.summary.total_expense`
- `report.processing.summary.total_records`
- `report.audit_analysis.risk_assessment.overall_risk`
- `report.audit_analysis.risk_assessment.confidence_score`

**Usage**:
```typescript
<SummaryCards report={report} />
```

**Formatting**:
- Currency: `formatCurrency()`
- Percentage: `formatPercent()`
- Color: Risk-based via `getRiskColor()`

---

### Charts (`components/Charts.tsx`)

Interactive chart visualizations using Recharts.

**Props**:
```typescript
interface ChartsProps {
  report: AuditReport
}
```

**Charts Included**:

#### 1. Category Distribution (Pie Chart)
- Data: `report.audit_analysis.visualization.category_distribution`
- Shows spending by category
- Color-coded slices
- Percentage labels

#### 2. Spending Trend (Line Chart)
- Data: `report.audit_analysis.visualization.spending_trend`
- Time-series line graph
- Smooth curve animation
- Hover tooltips
- Legend

#### 3. Violation Breakdown (Bar Chart)
- Data: `report.audit_analysis.visualization.violation_breakdown`
- Count by violation type
- Vertical bars
- Grid background

**Features**:
- Responsive sizing
- Custom tooltips with dark theme
- Smooth animations
- Legend support
- Grid and axes

**Usage**:
```typescript
<Charts report={report} />
```

---

### ViolationsTable (`components/ViolationsTable.tsx`)

Detailed table of critical violations.

**Props**:
```typescript
interface ViolationsTableProps {
  report: AuditReport
}
```

**Columns**:
| Column | Source |
|--------|--------|
| Employee | `violation.employee` |
| Amount | `violation.amount` (formatted currency, red text) |
| Category | `violation.category` (badge) |
| Date | `violation.date` (formatted) |
| Violation Type | `violation.violation_type` (red badge) |
| Description | `violation.description` |

**Features**:
- Hover highlighting
- Red accent colors
- Formatted currency values
- Date formatting
- Responsive scrolling
- Empty state handling

**Data Source**:
`report.audit_analysis.violation_analysis.critical`

**Usage**:
```typescript
<ViolationsTable report={report} />
```

---

### FraudSignals (`components/FraudSignals.tsx`)

Displays AI-detected fraud signals and anomalies.

**Props**:
```typescript
interface FraudSignalsProps {
  report: AuditReport
}
```

**Two Sections**:

#### Fraud Signals (Red theme)
- Data: `report.audit_analysis.fraud_signals` (array of strings)
- Red card background
- Bullet-point list
- Alert icon

#### Anomalies (Yellow theme)
- Data: `report.audit_analysis.anomalies` (array of strings)
- Yellow card background
- Bullet-point list
- Trending icon

**Usage**:
```typescript
<FraudSignals report={report} />
```

**Empty States**:
- Shows "No fraud signals detected" if list is empty
- Shows "No anomalies detected" if list is empty

---

### Recommendations (`components/Recommendations.tsx`)

Actionable recommendations with priority levels.

**Props**:
```typescript
interface RecommendationsProps {
  report: AuditReport
}
```

**Data Source**:
`report.audit_analysis.recommendations` (array of objects)

**Recommendation Object**:
```typescript
{
  title: string           // Recommendation title
  description: string     // Detailed description
  priority?: string       // "High", "Medium", "Low"
}
```

**Features**:
- 2-column grid layout
- Priority badges (color-coded)
- Card-based layout
- Title + description
- Responsive wrapping

**Priority Colors**:
- High: Red badge
- Medium: Yellow badge
- Low: Green badge

**Usage**:
```typescript
<Recommendations report={report} />
```

---

### Tips (`components/Tips.tsx`)

Cost optimization tips and savings suggestions.

**Props**:
```typescript
interface TipsProps {
  report: AuditReport
}
```

**Data Source**:
`report.audit_analysis.cost_optimization_tips` (array of objects)

**Tip Object**:
```typescript
{
  tip: string       // The optimization tip
  impact?: string   // Expected impact (e.g., "Save 15%")
}
```

**Features**:
- Vertical stack layout
- Green theme (emerald)
- Dot indicators
- Impact text in smaller font
- Each tip in its own card

**Usage**:
```typescript
<Tips report={report} />
```

---

### Dashboard (`components/Dashboard.tsx`)

Main container component that orchestrates all sections.

**Props**:
```typescript
interface DashboardProps {
  report: AuditReport
}
```

**Sections** (in order):
1. Header with title and date
2. Download & New Analysis buttons
3. Summary Cards
4. Executive Summary
5. Charts
6. Violations Table
7. Fraud Signals & Anomalies
8. Financial Insights
9. Recommendations
10. Cost Optimization Tips
11. Final Audit Summary
12. Bottom action buttons

**Functions**:
- `handleDownload()` - Downloads report as JSON
- `handleReset()` - Clears state and redirects to home

**Usage**:
```typescript
<Dashboard report={report} />
```

---

## 🔗 Utility Functions (`lib/utils.ts`)

### formatCurrency(value: number): string
Formats number as USD currency.
```typescript
formatCurrency(5000) // "$5,000.00"
```

### formatPercent(value: number): string
Formats decimal as percentage.
```typescript
formatPercent(0.95) // "95.00%"
```

### formatDate(date: string | Date): string
Formats date to readable format.
```typescript
formatDate("2024-01-15") // "Jan 15, 2024"
```

### getRiskColor(risk: string): string
Returns Tailwind color class based on risk level.
```typescript
getRiskColor("high")    // "text-red-500"
getRiskColor("medium")  // "text-yellow-500"
getRiskColor("low")     // "text-green-500"
```

### getRiskBgColor(risk: string): string
Returns background color class with border for risk level.
```typescript
getRiskBgColor("high") // "bg-red-500/10 border-red-500/20"
```

### getPriorityColor(priority: string): string
Returns color class for priority badges.

---

## 📦 API Service (`lib/api.ts`)

### AuditReport Type
```typescript
interface AuditReport {
  status: string
  message: string
  report: {
    processing: {
      summary: { total_expense, total_records, date_range }
    }
    audit_analysis: {
      risk_assessment: { overall_risk, confidence_score, risk_factors }
      violation_analysis: { critical: [...] }
      visualization: { category_distribution, spending_trend, ... }
      fraud_signals: string[]
      anomalies: string[]
      financial_insights: string[]
      recommendations: [{ title, description, priority }]
      cost_optimization_tips: [{ tip, impact }]
      final_audit_summary: string
    }
    executive_summary: string
  }
}
```

### auditAPI.uploadAndAnalyze(file: File)
Uploads CSV file and returns audit report.
```typescript
const report = await auditAPI.uploadAndAnalyze(csvFile)
```

---

## 🎨 State Management (`lib/store.ts`)

### useAuditStore()
Zustand store for managing audit state.

**State Properties**:
```typescript
{
  currentFile: File | null          // Currently selected file
  report: AuditReport | null        // Latest audit report
  loading: boolean                  // Is processing
  error: string | null              // Error message
  currentStep: number               // Current progress step
  totalSteps: number                // Total steps (5)
}
```

**Actions**:
```typescript
setFile(file)              // Set current file
setReport(report)          // Set report data
setLoading(isLoading)      // Set loading state
setError(error)            // Set error message
setCurrentStep(step)       // Set current step
incrementStep()            // Increment step by 1
reset()                    // Reset all state
```

**Usage**:
```typescript
const { report, loading, currentStep } = useAuditStore()
const { setFile, setReport, incrementStep } = useAuditStore()
```

---

## 🎨 Styling

### Tailwind Classes

**Dark Theme Colors**:
- Background: `bg-slate-950`, `bg-slate-900`
- Text: `text-slate-100`, `text-slate-400`
- Border: `border-slate-700`, `border-slate-600`
- Hover: `hover:bg-slate-800`

**Accent Colors**:
- Primary: `text-blue-400`, `bg-blue-500`
- Cyan: `text-cyan-400`, `bg-cyan-500`
- Red (High): `text-red-400`, `bg-red-500`
- Yellow (Medium): `text-yellow-400`, `bg-yellow-500`
- Green (Low): `text-green-400`, `bg-green-500`

**Responsive**:
- Mobile: `max-w-full`
- Tablet: `md:` prefix
- Desktop: `lg:` prefix

**Examples**:
```typescript
// Single column on mobile, 2 columns on tablet, 4 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

// Responsive padding
<div className="p-4 sm:p-6 lg:p-8">

// Responsive text
<h1 className="text-2xl sm:text-3xl lg:text-4xl">
```

---

## ♿ Accessibility

- Semantic HTML (`<table>`, `<button>`, `<input>`)
- ARIA labels (`aria-label` on inputs)
- Focus states (`:focus-visible`)
- Color contrast (WCAG AA compliant)
- Keyboard navigation
- Screen reader friendly

---

## 🚀 Component Usage Examples

### Complete Page Example
```typescript
"use client"

import { Dashboard } from "@/components/Dashboard"
import { useAuditStore } from "@/lib/store"

export default function DashboardPage() {
  const { report } = useAuditStore()

  if (!report) return <div>Loading...</div>

  return <Dashboard report={report} />
}
```

### Using Multiple Components
```typescript
<div className="space-y-8">
  <SummaryCards report={report} />
  <Charts report={report} />
  <ViolationsTable report={report} />
  <FraudSignals report={report} />
  <Recommendations report={report} />
  <Tips report={report} />
</div>
```

### Custom Card Layout
```typescript
<Card className="border-blue-500/20 bg-blue-500/5">
  <h3 className="text-lg font-semibold text-blue-400">Title</h3>
  <p className="text-slate-300">Content</p>
</Card>
```

---

## 📝 Best Practices

1. **Always check for data availability**
   ```typescript
   const data = report?.report?.audit_analysis?.recommendations || []
   if (data.length === 0) return <div>No data</div>
   ```

2. **Use optional chaining**
   ```typescript
   const value = report?.report?.processing?.summary?.total_expense
   ```

3. **Format values appropriately**
   ```typescript
   <span>{formatCurrency(amount)}</span>
   <span>{formatPercent(score)}</span>
   <span>{formatDate(dateString)}</span>
   ```

4. **Handle error states**
   ```typescript
   if (error) return <ErrorBoundary message={error} />
   ```

5. **Use semantic HTML**
   ```typescript
   <main>
   <section>
   <article>
   <table> with <thead>, <tbody>
   ```

---

## 🎯 Component Dependencies Graph

```
UploadForm
├─ useAuditStore
├─ useRouter
└─ Card, Button, Input, Badge

Loader
├─ useAuditStore
├─ Card
└─ Icons (lucide-react)

SummaryCards
├─ Card
├─ formatCurrency, formatPercent
├─ getRiskColor
└─ Icons (lucide-react)

Charts
├─ Card
├─ Recharts (Pie, Line, Bar)
└─ Custom components

ViolationsTable
├─ Card, Table components
├─ formatCurrency, formatDate
├─ Badge
└─ Icons (lucide-react)

FraudSignals
├─ Card
├─ Icons (lucide-react)

Recommendations
├─ Card, Badge
├─ getPriorityColor

Tips
├─ Card

Dashboard
├─ SummaryCards
├─ Charts
├─ ViolationsTable
├─ FraudSignals
├─ Recommendations
├─ Tips
├─ Button
├─ useRouter
├─ useAuditStore
└─ Icons (lucide-react)
```

---

**For questions or issues, refer to SETUP_GUIDE.md** 📚

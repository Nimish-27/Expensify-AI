# Expense Audit System Frontend

A comprehensive Next.js-based web application for uploading and analyzing expense CSV files. The application provides detailed audit reports including risk assessments, policy violation detection, and financial insights.

## Features

- **CSV File Upload**: Drag-and-drop or click to upload expense CSV files
- **Comprehensive Dashboard**: View key metrics at a glance
- **Visual Analytics**: 
  - Category distribution pie chart
  - Top spenders bar chart
  - Spending trends over time
- **Detailed Analysis**:
  - Policy violations detection
  - Anomaly detection
  - Fraud signal identification
  - Financial insights
  - Cost optimization recommendations
- **Data Breakdowns**:
  - Category-wise spending analysis
  - Department-wise spending analysis
  - Employee level distribution
  - Spending level distribution
- **Actionable Recommendations**: Prioritized by severity for compliance and cost optimization

## Architecture

### Components

- **FileUpload**: Drag-and-drop file upload interface
- **SummaryCards**: Key metrics displayed as visual cards
- **Charts**: Pie chart (categories) and bar chart (top spenders)
- **SpendingTrend**: Line chart showing spending over time
- **ViolationsTable**: Detailed table of policy violations
- **BreakdownTables**: Category and department breakdowns
- **Recommendations**: Priority-based action items
- **CostOptimization**: Cost-saving tips
- **FinancialInsights**: Detailed financial analysis
- **Anomalies**: Detected spending anomalies
- **FraudSignals**: Fraud signal indicators

### API Integration

The frontend connects to the backend API endpoint:

```
POST http://localhost:8000/api/full-audit
```

**Request**: Multipart form data with CSV file

**Response**: Comprehensive audit report in JSON format

## Setup and Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Usage

1. **Upload a CSV File**:
   - Click the upload area or drag-and-drop a CSV file
   - The file should contain expense data with columns like:
     - employee, amount, category, vendor, date, etc.

2. **View Results**:
   - Once uploaded, the system processes the file via the backend API
   - The comprehensive audit report is displayed with:
     - Executive summary
     - Key metrics
     - Visual charts and graphs
     - Detailed tables
     - Recommendations

3. **Upload Another File**:
   - Click "Upload Another File" button to process a new CSV

## Component Hierarchy

```
App (page.tsx)
├── FileUpload
├── SummaryCards
├── Charts
│   ├── Pie Chart (Categories)
│   └── Bar Chart (Top Spenders)
├── SpendingTrend
├── CategoryBreakdownTable
├── DepartmentBreakdownTable
├── ViolationsTable
├── Anomalies
├── FraudSignals
├── FinancialInsights
├── Recommendations
└── CostOptimization
```

## Styling

The application uses:
- **Tailwind CSS** for responsive design
- **Recharts** for interactive visualizations
- **Responsive Grid Layout** for mobile, tablet, and desktop views

## API Response Structure

The backend returns a structured response containing:

```json
{
  "status": "success",
  "message": "Audit completed successfully",
  "report": {
    "processing": { ... },
    "audit_analysis": { ... },
    "executive_summary": "..."
  }
}
```

## Error Handling

- File upload errors are displayed in a red error banner
- Loading state shows a spinner during file processing
- API errors are caught and user-friendly messages are shown

## Performance Considerations

- Large CSV files may take time to process on the backend
- Charts are rendered using Recharts for optimal performance
- Responsive design ensures smooth experience on all devices

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Environment Variables

The frontend uses the following API endpoint:

```
REACT_APP_API_URL=http://localhost:8000
```

This is configured in `lib/api.ts` as `API_BASE_URL`.

## Troubleshooting

### File Upload Not Working
- Ensure the backend API is running on `http://localhost:8000`
- Check that CORS is enabled on the backend
- Verify the CSV file format

### Charts Not Displaying
- Ensure all required data is present in the API response
- Check browser console for JavaScript errors

### Build Errors
- Clear `node_modules` and `.next` directories
- Reinstall dependencies: `npm install`
- Try building again: `npm run build`

## Development

### Project Structure

```
frontend/
├── app/
│   ├── page.tsx              # Main application
│   ├── layout.tsx
│   └── globals.css
├── components/               # React components
│   ├── FileUpload.tsx
│   ├── SummaryCards.tsx
│   ├── Charts.tsx
│   ├── SpendingTrend.tsx
│   ├── ViolationsTable.tsx
│   ├── BreakdownTables.tsx
│   ├── Recommendations.tsx
│   └── Insights.tsx
├── lib/                      # Utilities and types
│   ├── types.ts             # TypeScript types
│   └── api.ts               # API calls and helpers
└── package.json
```

## License

This project is part of the Expensify Audit System.

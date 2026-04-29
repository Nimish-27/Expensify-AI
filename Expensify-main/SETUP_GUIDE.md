# 🚀 AI Expense Auditor - Complete Setup Guide

Complete step-by-step guide to set up and run the AI Expense Auditor System (Frontend + Backend).

## 📋 Prerequisites

- **Node.js** 18.0+ ([Download](https://nodejs.org/))
- **Python** 3.8+ ([Download](https://www.python.org/))
- **npm** or **yarn** (comes with Node.js)
- **pip** (Python package manager)

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   Frontend (React)                  │
│              (Port 3000 - Development)              │
│  • Upload page with drag-and-drop                   │
│  • Animated loading screen                          │
│  • Interactive dashboard with charts                │
└────────────────┬────────────────────────────────────┘
                 │ (HTTP API Calls)
                 ▼
┌─────────────────────────────────────────────────────┐
│                  Backend (FastAPI)                  │
│              (Port 8000 - Development)              │
│  • CSV file upload & processing                     │
│  • Data cleaning & validation                       │
│  • AI analysis & fraud detection                    │
│  • JSON report generation                           │
└─────────────────────────────────────────────────────┘
```

---

## 🔧 Part 1: Backend Setup

### Step 1: Navigate to Backend Directory

```powershell
cd "d:\Siddhesh Folder\Expensify\backend"
```

### Step 2: Create Python Virtual Environment (Optional but Recommended)

```powershell
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### Step 3: Install Backend Dependencies

```powershell
pip install -r requirements.txt
```

If there's no `requirements.txt`, install required packages:

```powershell
pip install fastapi uvicorn pandas numpy python-multipart python-dotenv
```

### Step 4: Start the Backend Server

```powershell
uvicorn main:app --reload
```

**Expected Output:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete
```

✅ **Backend is running at:** http://localhost:8000

### Step 5: Test the Backend API

Open Postman or use curl to test:

```bash
curl -X POST http://localhost:8000/api/full-audit \
  -F "file=@data/samples/test_expenses.csv"
```

---

## 🎨 Part 2: Frontend Setup

### Step 1: Navigate to Frontend Directory

```powershell
# In a NEW terminal/PowerShell window
cd "d:\Siddhesh Folder\Expensify\frontend"
```

### Step 2: Install Dependencies

```powershell
npm install
```

⚠️ **If you see peer dependency warnings**, they're handled by `.npmrc`

### Step 3: Configure Environment

The `.env.local` file is already configured:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**To change API URL**, edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://your-api-url:8000
```

### Step 4: Start Frontend Development Server

```powershell
npm run dev
```

**Expected Output:**
```
  ▲ Next.js 16.2.4
  - Local:        http://localhost:3000
```

✅ **Frontend is running at:** http://localhost:3000

### Step 5: Open in Browser

Visit: **http://localhost:3000**

---

## 🧪 Testing the Full Application

### 1. Upload a Test File

1. Go to http://localhost:3000
2. Click or drag-and-drop a CSV file
3. Supported test files:
   - `backend/data/samples/business_expenses.csv`
   - `backend/data/samples/test_expenses.csv`
   - Any CSV with columns like: Employee, Amount, Category, Date

### 2. Watch the Loading Animation

The app shows 5 processing steps:
- ✓ Validating data...
- ✓ Cleaning data...
- ✓ Applying policies...
- ✓ Running AI analysis...
- ✓ Generating report...

### 3. View the Results

After processing, you'll see:
- **Summary Cards**: Total expenses, records, risk level, confidence
- **Charts**: Category distribution, spending trends, violations breakdown
- **Violations Table**: Detailed list of flagged transactions
- **Fraud Signals**: AI-detected suspicious patterns
- **Recommendations**: Cost-saving suggestions
- **Export**: Download full audit report as JSON

---

## 📁 Project File Structure

### Backend (`backend/`)

```
backend/
├── main.py                          # FastAPI app entry point
├── routes/
│   └── audit.py                     # /api/full-audit endpoint
├── services/
│   ├── full_audit_pipeline.py       # Main audit orchestration
│   ├── auditor.py                   # AI analysis engine
│   ├── data_prep_agent.py           # Data preparation
│   ├── column_mapper.py             # Column mapping
│   ├── data_cleaner.py              # Data cleaning
│   └── validator.py                 # Data validation
├── data/
│   ├── samples/
│   │   ├── test_expenses.csv        # Test data
│   │   └── business_expenses.csv    # Test data
│   ├── outputs/                     # Generated reports
│   ├── policies/                    # Business policies
│   └── training/                    # Training data
└── test_*.py                        # Test files
```

### Frontend (`frontend/`)

```
frontend/
├── app/
│   ├── layout.tsx                   # Root layout (dark theme)
│   ├── page.tsx                     # Home page (upload)
│   ├── globals.css                  # Global styles
│   ├── analyzing/
│   │   └── page.tsx                 # Loading screen
│   └── dashboard/
│       └── page.tsx                 # Results dashboard
├── components/
│   ├── ui.tsx                       # Base UI components
│   ├── UploadForm.tsx               # File upload (drag-drop)
│   ├── Loader.tsx                   # Loading animation
│   ├── Dashboard.tsx                # Main dashboard
│   ├── SummaryCards.tsx             # KPI cards
│   ├── Charts.tsx                   # Recharts visualizations
│   ├── ViolationsTable.tsx          # Violations table
│   ├── FraudSignals.tsx             # Fraud alerts & anomalies
│   ├── Recommendations.tsx          # Recommendations
│   └── Tips.tsx                     # Cost optimization tips
├── lib/
│   ├── utils.ts                     # Utilities (format, colors)
│   ├── api.ts                       # API client & types
│   └── store.ts                     # Zustand state management
├── .env.local                       # Environment variables
└── package.json                     # Dependencies
```

---

## 🎨 UI Components Overview

### Page Structure

#### Home Page (`/`)
- **Component**: `UploadForm.tsx`
- **Features**:
  - Drag-and-drop file upload
  - CSV file validation
  - File size check (max 50MB)
  - Visual feedback

#### Analyzing Page (`/analyzing`)
- **Component**: `Loader.tsx`
- **Features**:
  - 5-step progress animation
  - Percentage counter
  - Rotating spinner
  - Auto-redirect to dashboard

#### Dashboard Page (`/dashboard`)
- **Component**: `Dashboard.tsx`
- **Sections**:
  1. **Summary Cards** - 4 KPI cards
  2. **Charts** - 3 interactive charts
  3. **Violations Table** - Critical violations
  4. **Fraud Signals** - AI-detected threats
  5. **Financial Insights** - Key findings
  6. **Recommendations** - Action items
  7. **Cost Optimization** - Savings tips
  8. **Export** - Download report

### UI Component Library (`components/ui.tsx`)

Built-in components:
- `Card` - Styled container
- `Button` - Interactive button (variants: default, secondary, destructive)
- `Input` - Form input field
- `Badge` - Status badge
- `Table` / `TableRow` / `TableCell` - Data table components

---

## 📊 API Specification

### Endpoint: Upload & Analyze

**URL**: `POST /api/full-audit`

**Content-Type**: `multipart/form-data`

**Request**:
```bash
curl -X POST http://localhost:8000/api/full-audit \
  -H "Content-Type: multipart/form-data" \
  -F "file=@expenses.csv"
```

**Response** (200 OK):
```json
{
  "status": "success",
  "message": "Audit completed successfully",
  "report": {
    "processing": {
      "summary": {
        "total_expense": 50000,
        "total_records": 150,
        "date_range": "2024-01-01 to 2024-12-31"
      }
    },
    "audit_analysis": {
      "risk_assessment": {
        "overall_risk": "high",
        "confidence_score": 0.95,
        "risk_factors": [...]
      },
      "violation_analysis": {
        "critical": [
          {
            "employee": "John Doe",
            "amount": 5000,
            "category": "Travel",
            "date": "2024-01-15",
            "violation_type": "Unauthorized",
            "description": "Exceeded policy limit"
          }
        ]
      },
      "visualization": {
        "category_distribution": [
          { "name": "Travel", "value": 25000 },
          { "name": "Meals", "value": 15000 }
        ],
        "spending_trend": [
          { "date": "2024-01-01", "amount": 1000 }
        ],
        "violation_breakdown": [
          { "name": "High Value", "count": 5 }
        ],
        "top_spenders": [
          { "name": "John Doe", "amount": 15000 }
        ]
      },
      "fraud_signals": [
        "Multiple transactions in different cities within hours"
      ],
      "anomalies": [
        "50% spike in spending compared to average"
      ],
      "financial_insights": [
        "Travel expenses are 40% above industry average"
      ],
      "recommendations": [
        {
          "title": "Review Travel Policy",
          "description": "Current policy appears too lenient",
          "priority": "High"
        }
      ],
      "cost_optimization_tips": [
        {
          "tip": "Negotiate with preferred vendors",
          "impact": "Could save 15-20% on Travel"
        }
      ],
      "final_audit_summary": "..."
    },
    "executive_summary": "..."
  }
}
```

---

## 🔍 Troubleshooting

### Issue: "Failed to connect to API"

**Solution**:
1. Ensure backend is running: `http://localhost:8000`
2. Check `.env.local` has correct API URL
3. Open browser console (F12) to see detailed error
4. Verify CORS is enabled on backend

### Issue: "Cannot find module '@/components/...'"

**Solution**:
1. Ensure all component files exist
2. Run: `npm install` again
3. Check file paths are correct
4. Restart dev server: `npm run dev`

### Issue: "Port 3000 already in use"

**Solution**:
```powershell
# Use different port
npm run dev -- -p 3001
```

### Issue: "Port 8000 already in use"

**Solution**:
```powershell
# Use different port
uvicorn main:app --reload --port 8001
# Then update frontend .env.local to use port 8001
```

### Issue: Build fails with TypeScript errors

**Solution**:
1. Verify all files are saved
2. Run: `npm run build`
3. Check error messages for missing files
4. Ensure proper imports with `@/` alias

---

## 🧪 Testing

### Backend Tests

```powershell
cd backend

# Run all tests
python test_full_audit.py

# Test specific endpoint
python test_endpoint.py

# Test with Postman
# Import: Postman_Auditor_Collection_v2.json
```

### Frontend Tests

```powershell
cd frontend

# Lint code
npm run lint

# Build production
npm run build

# Start production server
npm run start
```

---

## 📦 Dependencies

### Frontend

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.2.4 | React framework |
| React | 19.2.4 | UI library |
| Tailwind CSS | 4.x | Styling |
| Recharts | 2.10 | Charts & graphs |
| Lucide React | 0.396.0 | Icons |
| Zustand | 4.4.0 | State management |
| Axios | 1.6.0 | HTTP client |

### Backend

| Package | Purpose |
|---------|---------|
| FastAPI | Web framework |
| Uvicorn | ASGI server |
| Pandas | Data manipulation |
| NumPy | Numerical computing |
| Python-multipart | File uploads |

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

```bash
npm run build
# Deploy to Vercel
vercel deploy
```

### Backend Deployment

1. Ensure backend has production dependencies
2. Use production ASGI server (Gunicorn)
3. Set appropriate environment variables
4. Configure CORS for frontend domain

---

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)
- [FastAPI Docs](https://fastapi.tiangolo.com)

---

## ✅ Checklist

- [ ] Node.js and Python installed
- [ ] Backend running on port 8000
- [ ] Frontend running on port 3000
- [ ] `.env.local` configured correctly
- [ ] Dependencies installed (`npm install`, `pip install -r requirements.txt`)
- [ ] Test data available (`backend/data/samples/`)
- [ ] Can upload CSV file
- [ ] Loading animation works
- [ ] Dashboard displays correctly
- [ ] Export functionality works

---

## 🎯 Quick Commands

```powershell
# Terminal 1: Backend
cd "d:\Siddhesh Folder\Expensify\backend"
uvicorn main:app --reload

# Terminal 2: Frontend
cd "d:\Siddhesh Folder\Expensify\frontend"
npm run dev

# Access at:
# Frontend: http://localhost:3000
# Backend:  http://localhost:8000
# API Docs: http://localhost:8000/docs
```

---

**Ready to go! 🚀 Start analyzing expenses with AI-powered insights!**

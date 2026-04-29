# 🚀 AI Expense Auditor - Full-Stack Application

> **Production-Ready** | **Modern Tech Stack** | **AI-Powered** | **Real-Time Analysis**

A complete full-stack web application for intelligent expense analysis, fraud detection, and compliance auditing using AI/ML.

## 📸 Features at a Glance

- 📤 **Smart Upload**: Drag-and-drop CSV file upload with validation
- ⏳ **Animated Processing**: Real-time 5-step loading animation  
- 📊 **Interactive Dashboard**: Beautiful charts and visualizations
- 🚨 **Fraud Detection**: AI-powered anomaly and fraud signal detection
- ✅ **Compliance**: Policy violation detection and flagging
- 💰 **Cost Optimization**: Smart recommendations and savings tips
- 📥 **Export**: Download complete audit reports as JSON
- 🌙 **Dark Theme**: Modern fintech-style dark UI
- 📱 **Responsive**: Works on all screen sizes

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│         Frontend (React/Next.js)        │
│    • Upload Page (Drag-and-drop)        │
│    • Loading Screen (5-step animation)  │
│    • Dashboard (Charts & Tables)        │
│    • Responsive Design (Dark Theme)     │
│                                         │
│    Port: 3000 (Development)             │
└────────────────┬────────────────────────┘
                 │ HTTP API
                 ▼
┌─────────────────────────────────────────┐
│         Backend (FastAPI)               │
│    • CSV Upload Processing              │
│    • Data Cleaning & Validation         │
│    • AI Analysis & Fraud Detection      │
│    • Report Generation                  │
│                                         │
│    Port: 8000 (Development)             │
└─────────────────────────────────────────┘
```

## 🚀 Quick Start (5 Minutes)

### Prerequisites
- Node.js 18+ & npm
- Python 3.8+ & pip
- 2 Terminal windows

### Setup

**Terminal 1 - Backend**
```powershell
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
# Runs on http://localhost:8000
```

**Terminal 2 - Frontend**
```powershell
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

**Browser**: Open http://localhost:3000

See [QUICK_START.md](./QUICK_START.md) for details.

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| [QUICK_START.md](./QUICK_START.md) | Get running in 5 minutes |
| [SETUP_GUIDE.md](./SETUP_GUIDE.md) | Detailed setup & troubleshooting |
| [COMPONENTS_GUIDE.md](./COMPONENTS_GUIDE.md) | Component documentation |
| [IMPLEMENTATION_COMPLETE.md](./IMPLEMENTATION_COMPLETE.md) | What was built |

## 📂 Project Structure

```
Expensify/
├── frontend/                      # React/Next.js Application
│   ├── app/
│   │   ├── page.tsx              # Home (Upload Page)
│   │   ├── layout.tsx            # Root Layout
│   │   ├── globals.css           # Styles
│   │   ├── analyzing/            # Loading Screen
│   │   └── dashboard/            # Results Dashboard
│   ├── components/               # React Components
│   │   ├── UploadForm.tsx
│   │   ├── Loader.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Charts.tsx
│   │   └── ... (8+ components)
│   ├── lib/
│   │   ├── api.ts               # API Client
│   │   ├── store.ts             # State Management
│   │   └── utils.ts             # Utilities
│   ├── .env.local               # Environment
│   └── package.json             # Dependencies
│
├── backend/                       # FastAPI Application
│   ├── main.py                  # Entry Point
│   ├── routes/audit.py          # Endpoints
│   ├── services/                # Business Logic
│   │   ├── full_audit_pipeline.py
│   │   ├── auditor.py
│   │   └── ... (utilities)
│   ├── data/samples/            # Test Data
│   └── test_*.py                # Tests
│
└── Documentation/
    ├── QUICK_START.md
    ├── SETUP_GUIDE.md
    ├── COMPONENTS_GUIDE.md
    └── IMPLEMENTATION_COMPLETE.md
```

## 🎨 Tech Stack

### Frontend
- **Framework**: Next.js 16.2.4
- **Language**: React 19.2.4 + TypeScript 5
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts 2.10
- **Icons**: Lucide React 0.396
- **State**: Zustand 4.4
- **HTTP**: Axios 1.6

### Backend
- **Framework**: FastAPI
- **Server**: Uvicorn (ASGI)
- **Data**: Pandas, NumPy
- **Processing**: Python 3.8+

## 📊 Features

### 🏠 Home Page
- **Drag-and-drop** CSV upload
- **File validation** (CSV only, <50MB)
- **Error handling** with user messages
- **Responsive design** for all devices

### ⏳ Loading Screen
- **5-step animation**:
  1. Validating data...
  2. Cleaning data...
  3. Applying policies...
  4. Running AI analysis...
  5. Generating report...
- **Progress bar** with smooth animation
- **Percentage counter**
- **Auto-redirect** to dashboard

### 📈 Dashboard
**Summary Section**:
- Total Expense (currency formatted)
- Total Records (count)
- Overall Risk Level (color-coded)
- Confidence Score (percentage)

**Visualizations**:
- Pie Chart - Category distribution
- Line Chart - Spending trends
- Bar Chart - Violation breakdown

**Data Tables**:
- Critical violations with employee, amount, category, date
- Color-coded risk levels
- Sortable columns

**AI Insights**:
- Fraud signals detection
- Anomaly detection
- Financial insights
- Smart recommendations
- Cost optimization tips

**Actions**:
- Download full report (JSON)
- Start new analysis
- Responsive layout

## 🔌 API Specification

### Endpoint
```
POST /api/full-audit
Content-Type: multipart/form-data
```

### Request
```javascript
const formData = new FormData()
formData.append("file", csvFile)

fetch("http://localhost:8000/api/full-audit", {
  method: "POST",
  body: formData
})
```

### Response
```json
{
  "status": "success",
  "message": "Audit completed successfully",
  "report": {
    "processing": {...},
    "audit_analysis": {...},
    "executive_summary": "..."
  }
}
```

## 🎯 Usage Example

1. **Open App**: http://localhost:3000
2. **Upload File**: Drag CSV or click to select
3. **Watch Processing**: 5-step animation plays
4. **View Results**: Dashboard shows insights
5. **Export Report**: Click "Download Report"
6. **New Analysis**: Click "New Analysis" to upload again

## 🛠️ Development

### Frontend Commands
```powershell
cd frontend

# Install dependencies
npm install

# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Production server
npm run start

# Lint code
npm run lint
```

### Backend Commands
```powershell
cd backend

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn main:app --reload

# Run tests
python test_full_audit.py
```

## 📝 File Upload Format

**Expected CSV Columns** (at minimum):
- Employee
- Amount
- Category
- Date
- Description (optional)

**Example Data**:
```csv
Employee,Amount,Category,Date,Description
John Doe,150.50,Travel,2024-01-15,Flight to NYC
Jane Smith,85.00,Meals,2024-01-16,Client lunch
```

**Test Files Available**:
- `backend/data/samples/test_expenses.csv`
- `backend/data/samples/business_expenses.csv`

## 🐛 Troubleshooting

### API Connection Issues
- Ensure backend running: `uvicorn main:app --reload`
- Check `.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:8000`
- Check CORS enabled on backend
- Check browser console for errors

### Port Already in Use
```powershell
# Frontend - use different port
npm run dev -- -p 3001

# Backend - use different port
uvicorn main:app --reload --port 8001
```

### Module Not Found
```powershell
cd frontend
npm install
npm run dev
```

### Build Failures
```powershell
cd frontend
rm -r node_modules .next
npm install
npm run build
```

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for more troubleshooting.

## 🔐 Security

- ✅ Input validation on file uploads
- ✅ File type checking (CSV only)
- ✅ File size limits (50MB max)
- ✅ Environment variable protection
- ✅ CORS configuration ready
- ✅ No sensitive data in frontend

## ♿ Accessibility

- ✅ Semantic HTML elements
- ✅ ARIA labels on inputs
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Color contrast WCAG AA compliant
- ✅ Screen reader friendly

## 📱 Responsive Design

- **Mobile** (< 640px): Single column, stacked layout
- **Tablet** (640px - 1024px): 2-column grid
- **Desktop** (> 1024px): Full responsive grid
- **Large** (> 1280px): Optimized spacing

## 🎨 Color System

| Element | Color | Usage |
|---------|-------|-------|
| Background | Slate-950 | Main background |
| Cards | Slate-800 | Content containers |
| Text | Slate-100 | Primary text |
| Border | Slate-700 | Dividers |
| Accent | Blue-500 | Primary action |
| High Risk | Red-500 | Alerts |
| Medium | Yellow-500 | Warnings |
| Low | Green-500 | Success |

## 📊 Data Visualization

### Charts Included
1. **Pie Chart** - Category distribution
   - Shows expense breakdown by category
   - Color-coded slices
   - Percentage labels

2. **Line Chart** - Spending trend
   - Time-series data
   - Smooth curves
   - Hover tooltips

3. **Bar Chart** - Violation breakdown
   - Violation counts by type
   - Vertical bars
   - Grid background

All charts are:
- Responsive
- Interactive (hover, click)
- Animated
- Dark-theme optimized

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
```

### Frontend (Docker)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

### Backend (Docker)
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [Zustand](https://zustand-demo.pmnd.rs/)

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Run tests
4. Submit PR

## 📄 License

Part of the AI Expense Auditor System.

## ✅ Implementation Status

- ✅ Frontend: Complete and tested
- ✅ Backend: Working (pre-built)
- ✅ API Integration: Complete
- ✅ Documentation: Comprehensive
- ✅ Dark Theme: Implemented
- ✅ Charts: Interactive
- ✅ Responsive: All breakpoints
- ✅ Production Build: Successful

---

## 🎯 Quick Links

| What | Where |
|------|-------|
| Get Started | [QUICK_START.md](./QUICK_START.md) |
| Setup Details | [SETUP_GUIDE.md](./SETUP_GUIDE.md) |
| Components | [COMPONENTS_GUIDE.md](./COMPONENTS_GUIDE.md) |
| What's Built | [IMPLEMENTATION_COMPLETE.md](./IMPLEMENTATION_COMPLETE.md) |
| Frontend | `frontend/` |
| Backend | `backend/` |

---

## 🚀 Get Started Now!

```powershell
# Backend
cd backend
uvicorn main:app --reload

# Frontend (in new terminal)
cd frontend
npm install
npm run dev

# Open browser
http://localhost:3000
```

**Start analyzing expenses with AI-powered insights!** 🎉

---

*Built with ❤️ for modern expense management*

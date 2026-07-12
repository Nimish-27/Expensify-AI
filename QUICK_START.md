# ⚡ Quick Start - AI Expense Auditor

Get the application running in 5 minutes!

## 🚀 Prerequisites

- Node.js 18+
- Python 3.8+
- 2 Terminal windows

## 🎯 The Absolute Fastest Setup

### Terminal 1: Backend (FastAPI)

```powershell
cd "d:\Siddhesh Folder\Expensify\backend"
pip install fastapi uvicorn pandas numpy python-multipart
uvicorn main:app --reload
```

**Expected**: Backend running on `http://localhost:8000`

### Terminal 2: Frontend (React)

```powershell
cd "d:\Siddhesh Folder\Expensify\frontend"
npm install
npm run dev
```

**Expected**: Frontend running on `http://localhost:3000`

---

## 🎨 Using the App (1 minute)

1. **Open Browser**: Go to http://localhost:3000

2. **Upload CSV**: 
   - Drag & drop a CSV file, or
   - Use test file: `backend/data/samples/test_expenses.csv`

3. **Watch Loading**: 
   - See animated 5-step progress
   - Takes 10-30 seconds

4. **View Results**:
   - See summary cards, charts, violations
   - Download report as JSON

---

## ✅ Verification Checklist

- [ ] Backend console shows "Uvicorn running on http://127.0.0.1:8000"
- [ ] Frontend console shows "Ready in Xs"
- [ ] Both browsers open without error
- [ ] Can upload CSV file
- [ ] Loading animation shows
- [ ] Dashboard displays with data

---

## 📊 API Test (Optional)

```powershell
# Test backend directly
curl -X POST http://localhost:8000/api/full-audit `
  -F "file=@backend/data/samples/test_expenses.csv"
```

---

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Port 8000 in use | `uvicorn main:app --reload --port 8001` |
| npm error | Delete `node_modules`, run `npm install` |
| Module not found | Run `npm install` in frontend folder |
| API not responding | Check backend is running |

---

## 📁 Key Files

```
frontend/
├── app/page.tsx          ← Upload page (/)
├── app/analyzing/        ← Loading page (/analyzing)
├── app/dashboard/        ← Results page (/dashboard)
└── .env.local            ← API URL config

backend/
├── main.py               ← FastAPI app
├── routes/audit.py       ← /api/full-audit endpoint
└── data/samples/         ← Test CSV files
```

---

## 🎯 Page Flow

1. **Home (/)** - Upload CSV
2. **Analyzing (/analyzing)** - Loading screen
3. **Dashboard (/dashboard)** - Results

---

## 💡 Tips

- **Test Files**: `backend/data/samples/test_expenses.csv`
- **API Docs**: http://localhost:8000/docs
- **Frontend Logs**: Browser console (F12)
- **Backend Logs**: Terminal window
- **Export Report**: Click "Download Report" button

---

## 🔄 Complete Commands

```bash
# Backend Setup (Terminal 1)
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend Setup (Terminal 2)
cd frontend
npm install
npm run dev

# Browser
open http://localhost:3000
```

---

## 📞 Common Issues

### "Cannot connect to API"
- Check: `http://localhost:8000` is running
- Check: `.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:8000`

### "Build failed"
- Run: `npm install` again
- Check: All files are saved

### "File upload fails"
- Use: CSV file only
- Max size: 50MB
- Test with: `backend/data/samples/test_expenses.csv`

---

## ✨ Features to Try

✅ Drag-and-drop upload
✅ Real-time loading animation  
✅ Interactive charts
✅ Fraud detection alerts
✅ Violation table
✅ Cost optimization tips
✅ Download reports
✅ Responsive design

---

**Done! You're ready to analyze expenses! 🎉**

For detailed setup, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)
For component docs, see [COMPONENTS_GUIDE.md](./COMPONENTS_GUIDE.md)

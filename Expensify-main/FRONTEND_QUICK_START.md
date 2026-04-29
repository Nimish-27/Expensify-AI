# Quick Start Guide - Frontend & Backend

## Starting the Application

### Terminal 1: Backend API

```bash
cd backend
python -m pip install -r requirements.txt  # if not already installed
uvicorn main:app --reload
```

The backend will start on `http://localhost:8000`

### Terminal 2: Frontend Application

```bash
cd frontend
npm install  # if not already installed
npm run dev
```

The frontend will start on `http://localhost:3000`

## Testing the System

1. **Open Frontend**: Navigate to `http://localhost:3000` in your browser
2. **Upload CSV**: Drag and drop or click to upload an expense CSV file
3. **Wait for Processing**: The file will be sent to the backend API
4. **View Results**: The comprehensive audit report will be displayed

## Workflow

1. User selects/uploads CSV file
2. Frontend sends file to backend via `/api/full-audit` endpoint
3. Backend processes the CSV through the audit pipeline
4. Frontend receives audit report with detailed analysis
5. Results are displayed with charts, tables, and recommendations

## Important Endpoints

### File Upload
```
POST /api/full-audit
Content-Type: multipart/form-data
Body: CSV file
Response: Comprehensive audit report (JSON)
```

## Testing with Sample Data

Sample CSV files are available in the backend:
- `backend/data/samples/business_expenses.csv`
- `backend/data/samples/test_expenses.csv`

Use these to test the system end-to-end.

## Troubleshooting

### CORS Issues
If you get CORS errors, ensure the backend has CORS enabled for `http://localhost:3000`

### API Connection Failed
- Check if backend is running on port 8000
- Verify the backend is not blocked by firewall
- Check browser console for detailed error messages

### File Upload Fails
- Ensure CSV file has proper headers and format
- File size should be reasonable (< 50MB recommended)
- Try with sample data first

## Development Workflow

1. Make changes to frontend components in `frontend/components/`
2. Frontend dev server will auto-reload
3. Make changes to backend in `backend/`
4. Backend dev server will auto-reload with `--reload` flag
5. Test changes in browser at `http://localhost:3000`

## Build for Production

### Frontend
```bash
cd frontend
npm run build
npm start
```

### Backend
```bash
cd backend
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker
```

## Performance Tips

- Compress large CSV files before uploading
- Backend processes files sequentially; avoid uploading multiple files simultaneously
- Clear browser cache if you encounter styling issues

## Key Files

- Frontend: `frontend/app/page.tsx` (main application)
- Backend: `backend/main.py` (API server)
- Backend Routes: `backend/routes/audit.py` (audit endpoint)
- Backend Services: `backend/services/full_audit_pipeline.py` (processing logic)

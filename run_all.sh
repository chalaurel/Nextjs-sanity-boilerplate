#!/bin/bash

# Navigate to frontend and start Next.js
echo "Starting Next.js..."
(cd frontend && npm run dev &)

# Navigate to backend and start FastAPI
echo "Starting FastAPI..."
(cd backend && source .venv/bin/activate && uvicorn main:app --reload &)

# Navigate to studio and start Sanity
echo "Starting Sanity Studio..."
(cd studio && sanity start &)

wait
```

Make the script executable:

```sh
chmod +x run_all.sh
```

Run the script with:

```sh
./run_all.sh
```

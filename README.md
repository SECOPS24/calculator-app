# Calculator App

A minimal calculator web app.

## Run
```
npm install
npm start
```

Visit http://localhost:3000

## API
POST /calculate { "a": number, "b": number, "op": "+|-|*|/" }

GET /health -> { "status": "ok" }
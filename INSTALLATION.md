# Installation Commands

## Prerequisites
- Node.js 18+ installed
- MongoDB installed locally or MongoDB Atlas account

## Installation Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Set Up Environment Variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

3. **Run Development Server**
```bash
npm run dev
```

4. **Build for Production**
```bash
npm run build
npm start
```

## Additional Commands

- **Lint Code**: `npm run lint`
- **Type Check**: `npx tsc --noEmit`

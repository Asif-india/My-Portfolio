# Complete Folder Structure

```
portfolio/
├── app/                          # Next.js 15 App Router
│   ├── api/                      # API Routes
│   │   └── contact/              # Contact form API
│   │       └── route.ts          # POST/GET handlers
│   ├── components/               # Reusable Components
│   │   ├── ui/                   # UI Components (buttons, cards, etc.)
│   │   ├── layout/               # Layout Components (header, footer)
│   │   └── sections/             # Page Sections (hero, about, etc.)
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── lib/                          # Utility Libraries
│   ├── mongodb.ts                # MongoDB connection
│   └── models/                   # Mongoose Models
│       └── Contact.ts            # Contact model
├── public/                       # Static assets
│   ├── images/                   # Images
│   └── icons/                    # Icons
├── types/                        # TypeScript Types
│   └── index.ts                  # Global types
├── .env.example                  # Environment variables template
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Folder Descriptions

- **app/**: Next.js 15 App Router directory containing all pages and API routes
- **components/**: Reusable React components organized by type
- **lib/**: Utility functions, database connections, and models
- **public/**: Static assets accessible from the root URL
- **types/**: TypeScript type definitions and interfaces

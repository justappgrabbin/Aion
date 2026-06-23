# AION - Autonomous Intelligence Operating Network

## The Living Substrate

AION is a complete system for ingesting, organizing, and operating autonomous intelligence ecosystems. It combines:

- **Next.js 14** (React frontend)
- **Pyodide** (Python in browser for file parsing & symbolic computation)
- **Supabase** (Database, auth, storage, realtime)
- **Human Design** (Personalized interface morphing)
- **AutoLing** (Who/What/Where/When/Why/How hypothesis engine)
- **Symbolic Computation** (I Ching, Astrology, Human Design, cross-framework translation)

## Three Interface Modes

1. **The Cortex (OS)** - File management, mesh visualization, system operations
2. **The Vessel (Body)** - Human Design bodygraph, file distribution across centers
3. **The Grimoire (Notebook)** - Research journal, I Ching divination, knowledge recording

## Setup

1. `npm install`
2. Copy `.env.local` and fill in Supabase credentials
3. Run the SQL in `supabase/schema.sql` in your Supabase project
4. `npm run dev`
5. Open `http://localhost:3000`

## File Ingestion

Drag and drop ANY file type:
- Code: JS, JSX, TS, TSX, PY, RS, Java, C++, Go, Ruby, PHP, Swift, Kotlin
- Data: JSON, XML, YAML, CSV, SQL, GraphQL
- Media: MP3, MP4, PNG, JPG, SVG
- Archives: ZIP, TAR
- Documents: PDF, MD, RST

The system parses structure, maps dependencies, classifies domains, and places everything in the mesh.

## AutoLing Engine

Ask questions across 6 dimensions:
- **Who** - Actors, authors, agents
- **What** - Files, functions, content
- **Where** - Paths, domains, locations
- **When** - Timing, cycles, dates
- **Why** - Purpose, causality, intent
- **How** - Mechanisms, processes, methods

The engine generates hypotheses, suggests code, and discovers cross-framework correspondences.

## Architecture

```
AION/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Mode selector (OS/Body/Notebook)
│   ├── globals.css         # Global styles + HD themes
│   ├── os/                 # OS mode page
│   ├── body/               # Body mode page
│   ├── notebook/           # Notebook mode page
│   └── api/                # API routes
├── components/
│   ├── pyodide/            # Pyodide provider
│   ├── supabase/           # Supabase provider
│   ├── ingestion/          # File ingestion engine
│   ├── mesh/               # Graph visualization
│   ├── autoling/           # AutoLing query engine
│   └── interfaces/         # Three UI modes
├── hooks/                  # React hooks
├── types/                  # TypeScript definitions
├── lib/pyodide/            # Python engine files
│   ├── file_parser.py      # File parsing (20+ formats)
│   ├── symbolic_calculator.py  # I Ching, Astrology, HD
│   ├── mesh_builder.py     # Graph construction
│   └── autoling_core.py    # Hypothesis & code generation
└── supabase/
    └── schema.sql          # Complete database schema
```

## Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- **Browser Engine:** Pyodide 0.26 (Python in WASM)
- **Backend:** Supabase (PostgreSQL, Auth, Storage, Realtime)
- **Visualization:** HTML5 Canvas (force-directed graph)
- **File Processing:** JSZip, native File API, Pyodide AST parsing

## Human Design Integration

The interface morphs based on the user's Human Design type:
- **Manifestor:** Bold, direct, minimal
- **Generator:** Satisfying, responsive, rich
- **Manifesting Generator:** Dynamic, multitasking, adaptive
- **Projector:** Elegant, inviting, focused
- **Reflector:** Lunar, cyclical, transparent

## License

MIT - Built for the cultivation of autonomous intelligence.

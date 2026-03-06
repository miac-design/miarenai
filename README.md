# Miaren AI — Next.js Website

## Quick Start

```bash
# 1. Create the Next.js project
npx create-next-app@latest miarenai-site --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"

# 2. Copy all files from this project into the created directory
#    (overwrite existing files when prompted)

# 3. Install dependencies
cd miarenai-site
npm install

# 4. Run development server
npm run dev
```

## Deploy to Vercel

```bash
# Connect to Vercel (you already have MCP connected)
npx vercel
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with JSON-LD, metadata, fonts
├── page.tsx            # Homepage
├── about/page.tsx      # About page
├── services/page.tsx   # Services page
├── faq/page.tsx        # FAQ page
├── insights/page.tsx   # Blog listing
├── insights/glossary/page.tsx  # GEO Glossary
├── contact/page.tsx    # Contact / Audit request
├── robots.ts           # robots.txt (allows AI crawlers)
├── sitemap.ts          # Auto-generated sitemap
├── globals.css         # Global styles + brand tokens
components/
├── Header.tsx          # Navigation
├── Footer.tsx          # Footer
├── ExactFramework.tsx  # Interactive EXACT section
├── FaqAccordion.tsx    # FAQ accordion
├── ContactForm.tsx     # Audit request form
├── ServiceCard.tsx     # Service tier cards
├── StatCounter.tsx     # Animated stat counters
├── GlossarySearch.tsx  # Glossary A-Z + search
lib/
├── metadata.ts         # Shared metadata helpers
├── schema.ts           # JSON-LD structured data
├── glossary-data.ts    # Glossary terms
├── blog-data.ts        # Blog post metadata
public/
├── (images go here)
```

## GEO Optimizations Built In

- **SSR/SSG**: Every page server-rendered — AI crawlers see full HTML
- **JSON-LD Schema**: Organization, Person, Service, FAQPage, Article
- **robots.txt**: Explicitly allows GPTBot, PerplexityBot, ClaudeBot, Googlebot
- **Sitemap**: Auto-generated from all routes
- **Semantic HTML**: Proper heading hierarchy, landmark elements
- **OpenGraph + Twitter Cards**: Full meta on every page
- **Structured FAQ**: FAQPage schema for AI engines to parse


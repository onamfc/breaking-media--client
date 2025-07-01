# BreakingMedia.ai

BreakingMedia.ai is an AI-powered editorial platform that delivers dynamic, personalized articles through a modern publishing interface. This repository contains only the client-side application, built using Next.js and TypeScript. While it is currently configured to consume data from the private BreakingMedia.ai API—which generates, stores, and serves AI-created content and images—the frontend is designed to be flexible and can integrate with any compatible API that provides similar data structures.

This codebase has been made public to showcase engineering capability, design architecture, and frontend best practices. You can run the client locally or in production, but it will not display content without connecting to a suitable backend API.
## 🌐 Project Structure

- **Frontend**: [Next.js](https://nextjs.org/) with TypeScript
- **Backend**: [Laravel](https://laravel.com/) (assumed from previous context)
- **Styling**: Tailwind CSS & custom styles
- **Content Source**: REST API at `NEXT_PUBLIC_API_URL`
- **Fonts**: Google Fonts (Oswald)
- **Image Hosting**: Stored in Laravel's public storage and accessed via API
- **SEO**: Dynamic OpenGraph and JSON-LD metadata

---

## 📁 Key Files and Components

### `/app/page.tsx`
Fetches all blog posts server-side and passes them to the client-side renderer.

### `/app/blog/blogClient.tsx`
Client component that:
- Renders a featured post
- Groups posts by category
- Handles navigation via `next/router`
- Applies styles from `style.css`

### `/app/blog/[slug]/page.tsx`
Dynamic route to display individual blog posts with:
- SEO metadata (OpenGraph & structured JSON-LD)
- Fallback for missing posts
- Author info and article body

### `/app/header.tsx`
Styled header component with branding (`breakingmedia`) and a `Subscribe` button.

### `/style.css`
Defines visual layout and typography, especially for:
- Post grid
- Featured article layout
- Typography for titles, authors, excerpts, etc.

---

## 🛠️ Features
- ⚡ Server-side rendering for fast initial page loads
- 🔍 Dynamic SEO metadata generation (title, OG, structured data)
- 🖼️ Featured article support
- 🗂️ Categorized article rendering
- 📱 Responsive layout with semantic HTML and accessible navigation
- 🔒 Safe dangerouslySetInnerHTML usage for rendering HTML from the API


## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Laravel backend running (serving `api/posts` and `api/post/:slug`)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-org/breakingmedia.git

# Navigate into the frontend project
cd breakingmedia

# Install dependencies
npm install

# Set up your environment variables
cp .env.local.example .env.local
# Edit .env.local to include:
# NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Run the dev server
npm run dev

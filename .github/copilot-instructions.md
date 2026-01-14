<!-- Custom instructions for Spline 3D Navigation project -->

## Project Overview
This is a Next.js project with 3D Spline navigation. Users can navigate between pages by dragging a 3D object.

## Architecture
- Server-rendered pages in `src/app/` (accueil, services, contact)
- Client components for interactivity in `src/components/`
- Data layer in `src/lib/data.ts`

## Key Technologies
- Next.js with App Router
- React Spline for 3D objects
- Framer Motion for animations
- Tailwind CSS for styling

## Development Guidelines
- Keep 3D scene lightweight for performance
- Use SSR for SEO-friendly content
- Client components only for interactive parts

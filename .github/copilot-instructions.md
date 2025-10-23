# AI Agent Instructions for Movie App

## Project Overview
This is a Next.js movie application using the App Router pattern and modern React features. The project uses Tailwind CSS for styling and ESLint for code quality.

## Key Architecture Points
- Uses Next.js 15.5.6 with the new App Router architecture (`src/app` directory)
- Employs Turbopack for faster development builds (see package.json scripts)
- Implements TailwindCSS for styling
- Uses the Geist font family through next/font optimization

## Development Workflow

### Getting Started
```bash
npm install
npm run dev
```
The development server will start at http://localhost:3000 with hot-reload enabled.

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build with Turbopack
- `npm run start` - Run production server
- `npm run lint` - Run ESLint checks

## Project Structure
- `src/app/` - Main application code using Next.js App Router
  - `layout.js` - Root layout component
  - `page.js` - Home page component
- `public/images/` - Static image assets
- `src/app/globals.css` - Global styles and Tailwind directives

## Conventions and Patterns
1. **Routing**: Based on file-system routing through the App Router
   - Pages are defined in `page.js` files
   - Layouts are defined in `layout.js` files
   - Group routes using folders in the `app` directory

2. **Styling**: 
   - Use Tailwind CSS classes for styling
   - Global styles are defined in `globals.css`

3. **Components**:
   - Use React Server Components by default (no 'use client' directive)
   - Add 'use client' directive only when client-side interactivity is needed

4. **Asset Handling**:
   - Use the `next/image` component for optimized images
   - Store static assets in the `public` directory

## Performance Considerations
- Turbopack is enabled for faster development and builds
- Font optimization is implemented using next/font
- Image optimization is available through next/image

## Integration Points
- No external APIs integrated yet
- Ready for Vercel deployment

When contributing, ensure to:
1. Follow the existing file-system based routing pattern
2. Utilize Tailwind CSS for styling
3. Keep components server-side by default
4. Run ESLint before committing changes
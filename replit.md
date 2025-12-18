# Pousada Coração da Ilha

## Overview
A React + Vite + TypeScript single-page website for a boutique hotel/pousada on Ilha do Mel, Brazil. The site showcases accommodations, experiences, island guide, testimonials, and booking functionality.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React

## Project Structure
```
/
├── App.tsx              # Main application component
├── index.tsx            # React entry point
├── index.html           # HTML template
├── constants.ts         # App constants and data
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
├── components/          # React components
│   ├── About.tsx
│   ├── Accommodations.tsx
│   ├── BookingForm.tsx
│   ├── Experience.tsx
│   ├── FloatingWidgets.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── IslandGuide.tsx
│   ├── IslandHistory.tsx
│   ├── Navbar.tsx
│   ├── Policies.tsx
│   ├── Testimonials.tsx
│   └── VideoPresentation.tsx
```

## Development
- Run: `npm run dev` (starts on port 5000)
- Build: `npm run build`

## Deployment
- Type: Static
- Build command: `npm run build`
- Output directory: `dist`

## Environment Variables
- `GEMINI_API_KEY` (optional): API key for Gemini integration

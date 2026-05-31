# AVG Run Club — Premium Running Community Website

A modern, premium, fully responsive website for **AVG Run Club** (Bharuch, Gujarat) built with Next.js 16.

**Tagline:** *Run Far, Not Fast.*

## Features

- Beautiful dark premium design (Nike Run Club × Strava inspired)
- Fully functional member registration system
- Dynamic event registration
- Interactive community section with search
- Instagram-style gallery with lightbox
- Google Maps integration for run locations
- Admin Dashboard (`/admin`)
- PWA ready
- Smooth Framer Motion animations
- Mobile-first responsive design

## Tech Stack

- Next.js 16 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Admin Dashboard

Access at `/admin`

- **Password:** `admin123`
- Features: Add/Delete events, View members, Export CSV

## Deployment (Vercel)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Deploy

## Project Structure

```
components/
├── Navbar.tsx
├── Hero.tsx
├── About.tsx
├── Events.tsx
├── JoinSection.tsx
├── Community.tsx
├── Gallery.tsx
├── Locations.tsx
├── Testimonials.tsx
├── Footer.tsx
├── JoinModal.tsx

app/
├── page.tsx
├── admin/page.tsx
├── layout.tsx
```

## License

For AVG Run Club, Bharuch.

---

Built with ❤️ for the running community of Bharuch.

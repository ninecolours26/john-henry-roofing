# John Henry Roofing — Option B Routed Site

This package converts the John Henry Roofing website from a single-page anchor site into a routed React/Vite site with real URLs for the main pages and service pages.

## Key changes

- Added React Router routes for Home, About, Services, Gallery, Reviews, Careers, Contact, and Quote.
- Added service subpages through a dynamic service page route: `/services/:slug`.
- Added Careers before Contact in the main navigation.
- Added Eavestroughs & Gutters, Soffit & Fascia, and Siding to the service system.
- Moved quote form logic into `src/components/QuoteForm.jsx`.
- Moved company and service copy into `src/data/siteData.js`.
- Added mobile navigation with a tap-friendly Services dropdown.
- Added a mobile action bar for Call and Free Estimate.
- Added `vercel.json` so direct subpage links work on Vercel.

## Install note

After replacing the project files, run:

npm install

Then run:

npm run dev

## Supabase note

The quote form expects these environment variables:

VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY

If they are missing, the form will show that it is ready but not connected.

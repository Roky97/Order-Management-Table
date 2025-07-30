# Orders Management Table

This project implements an Orders Management Table using React, Vite, and AG Grid. It displays trading orders with interactive features and a dark theme.

## Features
- AG Grid Community Edition for the main table and child orders table
- Infinite scroll (no pagination)
- Row selection (select row on cell click)
- Child orders display for selected parent order
- Overflow action menu per row
- CSV export button
- "Create order" button (UI only)
- Color-coded status badges and side colors
- Responsive dark theme
- Static sample data (no backend)

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Assumptions
- All data is static and loaded from a local file.
- Child orders are shown below the selected parent order.
- Overflow menu options are placeholders.
- No backend/API integration.
- Focus is on AG Grid features and dark theme and a custum action menu higly reusable well integrated with AG Grid APIs.

## Libraries Used
- React
- Vite
- AG Grid Community Edition
- Styling with styled-components and MUI


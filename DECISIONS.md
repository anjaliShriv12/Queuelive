# QueueLive — Engineering Decisions

## 1. Approach and Rejected Alternative

I chose the Premium Home Page track and built QueueLive as a responsive React + Vite + Tailwind CSS product experience. The main goal was to communicate the product clearly within the first few seconds rather than build a large application behind the page.

I considered building a more complex multi-page application with a backend, authentication, and real queue APIs, but rejected that approach because it would have reduced the time available for visual quality and responsive polish. Instead, I focused on a single strong product page with a live queue preview, wait-time visualization, department dashboard, clear CTAs, and small purposeful interactions.

The ingestion strategy mentioned in the written explanation is related to Part 1. Since this submission uses Part 2, I did not implement an external data-ingestion pipeline. The queue information shown on the page is representative demo data and is clearly presented as product demonstration data.

## 2. Time-Limit Trade-off

The main trade-off was choosing a polished frontend product experience over implementing a complete backend queue-management system.

With a full development week, I would add authentication, persistent queue data, real-time updates using WebSockets, department and staff controls, notifications, and a real wait-time prediction service.

For this challenge, I prioritized responsive behavior, visual hierarchy, product demonstration, accessibility, and a clean component structure.

## 3. AI Usage and Verification

I used AI assistance during development for implementation guidance, component ideas, Tailwind CSS patterns, debugging, and reviewing the overall structure.

I personally integrated the suggestions into the project, tested the application locally, checked the UI at desktop and mobile widths, fixed implementation errors, verified navigation and interactions, and changed generated code whenever it did not work correctly with the installed packages.

The final implementation was reviewed and tested locally before deployment.

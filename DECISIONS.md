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

## 4. Visual Hierarchy and Interaction

The visual hierarchy is centered around the main QueueLive value proposition:
"Your place in line. Without standing in it."

I used a dark near-black background with white text and muted gold as the
primary accent. Gold is used selectively for CTAs, queue progress, important
status information, and interactive elements.

The homepage is structured in a clear sequence:

1. Hero section with the main value proposition and primary CTA
2. Live queue preview showing token, position, wait time, and progress
3. How QueueLive works
4. Product features
5. Wait-time visualization
6. Organization dashboard preview
7. Final CTA and footer

The primary product interaction is the "Join this queue" action. When clicked,
the representative demo data changes to show a new token, queue position,
people ahead, estimated wait time, queue progress, and a confirmation state.

This was implemented as a frontend interaction rather than a real queue API,
because the assignment focuses on the homepage product experience.

## 5. Responsive Design

The page was designed to work across desktop and mobile screen sizes.

On desktop, the layout uses multiple columns for the hero, queue preview,
wait-time visualization, and dashboard sections. On smaller screens, these
layouts collapse into single-column sections to maintain readability.

The desktop navigation is replaced with a hamburger menu on mobile. The mobile
menu can be opened and closed, and navigation links close the menu after being
selected.

I tested the homepage at 390px and 1440px widths and checked the complete page
for horizontal overflow, overlapping elements, clipped content, and broken
navigation.

## 6. Accessibility and Usability

I kept the interface simple and focused on clear labels, readable text,
visible interactive states, and consistent button behavior.

Navigation links use meaningful labels, the mobile menu provides an explicit
open/close state, and interactive elements have visible hover and focus
behavior.

Representative demo data is clearly labeled so it is not presented as real
queue or appointment data.
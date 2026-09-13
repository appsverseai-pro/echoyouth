/**
 * EchoYouth — site content
 * -------------------------------------------------
 * This file is the single source of truth for editable content.
 * In a real deployment, this file lives in your git repo and is
 * edited either directly (code) or via /admin.html (which exports
 * an updated version of this exact file for you to commit).
 *
 * Structure is intentionally flat and JSON-serializable so it can
 * later be swapped for a real CMS or API response with no changes
 * to the page templates below.
 */
window.SITE_CONTENT = {
  hero: {
    eyebrow: "EchoYouth",
    headline: "An echo of impact.",
    sub: "Build the next generation of builders.",
    desc: "We give young builders the exposure, community, and opportunities to turn curiosity into action — and ideas into impact."
  },
  about: {
    mission: "To give young builders the exposure, community, and opportunities to turn curiosity into action and ideas into impact.",
    vision: "To create an echo of impact — where one generation of young builders inspires, empowers, and creates opportunities for the next.",
    pillars: [
      { title: "Exposure", body: "Real projects, real tools, real people working in the fields our builders are curious about." },
      { title: "Community", body: "A peer group and mentor network that makes ambition feel normal, not lonely." },
      { title: "Opportunity", body: "A clear next step after every workshop, demo day, and conversation." }
    ]
  },
  programs: [
    { name: "Builder Labs", desc: "Hands-on project sprints where small teams prototype a working solution to a problem they care about." },
    { name: "Mentorship Circles", desc: "Small groups paired with engineers, founders, artists, and organizers for ongoing guidance." },
    { name: "Idea-to-Impact Accelerator", desc: "For builders with something already working — a track focused on real-world reach." },
    { name: "Alumni-Led Chapters", desc: "Past participants return as near-peer leaders, running the next cohort in their own city." }
  ],
  founders: [
    { name: "Founder Name", role: "Co-Founder & Executive Director", bio: "Placeholder bio — a sentence on background and why they started EchoYouth.", initials: "FN" },
    { name: "Founder Name", role: "Co-Founder & Programs Lead", bio: "Placeholder bio — a sentence on background and why they started EchoYouth.", initials: "FN" },
    { name: "Founder Name", role: "Co-Founder & Partnerships", bio: "Placeholder bio — a sentence on background and why they started EchoYouth.", initials: "FN" },
    { name: "Founder Name", role: "Co-Founder & Community", bio: "Placeholder bio — a sentence on background and why they started EchoYouth.", initials: "FN" },
    { name: "Founder Name", role: "Co-Founder & Operations", bio: "Placeholder bio — a sentence on background and why they started EchoYouth.", initials: "FN" }
  ],
  events: {
    // Types of events EchoYouth runs (placeholders). Hover a chip on the
    // events page to reveal its blurb.
    types: [
      { label: "Educational Content & Media", blurb: "Students produce podcasts, interviews, and articles on entrepreneurship, AI, investing, and leadership." },
      { label: "Startup Pitch Competitions", blurb: "Shark Tank–style contests where teams build business ideas and pitch to founders and investors." },
      { label: "Investing & Market Simulations", blurb: "Virtual trading competitions, portfolio challenges, and financial literacy workshops." },
      { label: "Speaker Series & Webinars", blurb: "Founders, investors, and executives share their journeys and expertise with students." },
      { label: "Community Service Projects", blurb: "Fundraisers, brand-building, and creative media projects that develop real leadership." },
      { label: "Company Visits & Career Days", blurb: "Visits to startups, VC firms, and tech companies, plus job shadowing and internships." },
      { label: "Entrepreneurship Workshops", blurb: "Hands-on sessions in design thinking, business models, marketing, and financial modeling." },
      { label: "Networking Events", blurb: "Mixers, founder roundtables, fireside chats, and career panels to build connections." },
      { label: "Mentorship Program", blurb: "Structured mentorship pairing students with professionals, founders, and college mentors." }
    ],
    upcoming: [
      { date: "Sun, Sep 13, 2026 · 9:00–10:00am PDT", location: "Zoom (link TBD)", title: "Virtual Professional Interview Series: Vikram Venkat, Principal of Cota Capital", desc: "A live conversation with Vikram Venkat, Principal at Cota Capital, on venture capital and career paths." },
      { date: "Wed, Sep 16, 2026 · 2:30–4:30pm PDT", location: "555 Mission St #1800, San Francisco, CA 94105", title: "EchoYouth Company Visit Series: Cota Capital", desc: "An in-person visit to Cota Capital to meet the team and see how a venture capital firm works." }
    ],
    past: []
  },
  impact: {
    stats: [
      { number: "140+", label: "Young builders reached" },
      { number: "32", label: "Projects launched" },
      { number: "60+", label: "Mentor hours logged monthly" },
      { number: "4", label: "Alumni-led chapters" }
    ],
    quote: "I came in with an idea I was embarrassed to say out loud. Six weeks later I was demoing it to a room of eighty people.",
    attrib: "Maya, 17 — Builder Labs Spring Cohort"
  },
  contact: {
    email: "hello@echoyouth.org",
    location: "Dublin, CA"
  }
};

/**
 * Merge in any locally-saved draft from the admin console (localStorage),
 * so edits preview instantly across pages in the same browser before
 * you export and commit the real file. Falls back silently if absent.
 */
(function applyLocalOverride() {
  try {
    const draft = localStorage.getItem('echoyouth_content_draft');
    if (draft) {
      window.SITE_CONTENT = JSON.parse(draft);
    }
  } catch (e) { /* ignore malformed draft */ }
})();

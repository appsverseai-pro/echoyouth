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
    upcoming: [
      { date: "Sep 20, 2026", location: "Dublin, CA", title: "Fall Builder Kickoff", desc: "Meet the new cohort, tour the lab, and pitch your first project idea in five minutes flat." },
      { date: "Oct 11, 2026", location: "Virtual", title: "Mentor Match Night", desc: "A speed-networking session pairing builders with mentors across engineering, design, and organizing." },
      { date: "Nov 8, 2026", location: "Dublin, CA", title: "Demo Day: Fall Cohort", desc: "Twelve teams present what they built this fall. Open to families, partners, and future builders." }
    ],
    past: [
      { date: "Jun 2026", title: "Summer Builder Lab", desc: "18 builders shipped 6 working prototypes in three weeks." },
      { date: "Apr 2026", title: "Community Build Day", desc: "Builders and mentors partnered with a local nonprofit for a one-day sprint." },
      { date: "Feb 2026", title: "Winter Demo Day", desc: "First public showcase — over 80 guests attended." },
      { date: "Jan 2026", title: "EchoYouth Launch Night", desc: "Where it all started, with our founding cohort of 10 builders." }
    ]
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

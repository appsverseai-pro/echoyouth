// Mobile nav toggle — used on every page
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }
});

const Render = {
  pillars(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.about.pillars.map((p, i) => `
      <div>
        <span class="row-num">0${i + 1}</span>
        <h3 class="item-title">${p.title}</h3>
        <p>${p.body}</p>
      </div>`).join('');
  },
  programs(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.programs.map((p, i) => `
      <div>
        <span class="row-num">0${i + 1}</span>
        <h3 class="item-title">${p.name}</h3>
        <p>${p.desc}</p>
      </div>`).join('');
  },
  founders(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.founders.map(f => `
      <div class="founder">
        <div class="avatar">${f.initials}</div>
        <h3>${f.name}</h3>
        <div class="role">${f.role}</div>
        <p>${f.bio}</p>
      </div>`).join('');
  },
  eventTypes(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.events.types
      .map(t => `<span class="type-chip">${t}</span>`)
      .join('');
  },
  upcomingEvents(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.events.upcoming.map(e => `
      <div class="event-row">
        <div class="event-meta">${e.date}<br>${e.location}</div>
        <div>
          <div class="event-title">${e.title}</div>
          <p class="event-desc">${e.desc}</p>
        </div>
        <a class="event-link" href="contact.html">Save your spot →</a>
      </div>`).join('');
  },
  pastEvents(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.events.past.map(e => `
      <div class="past-card">
        <div class="event-meta">${e.date}</div>
        <h4>${e.title}</h4>
        <p>${e.desc}</p>
      </div>`).join('');
  },
  stats(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.impact.stats.map(s => `
      <div class="stat">
        <div class="stat-num">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('');
  },
  quote(el) {
    if (!el) return;
    el.innerHTML = `
      <p class="quote">"${SITE_CONTENT.impact.quote}"</p>
      <p class="quote-attrib">— ${SITE_CONTENT.impact.attrib}</p>`;
  },
  hero(el) {
    if (!el) return;
    el.querySelector('[data-hero-headline]').textContent = SITE_CONTENT.hero.headline;
    el.querySelector('[data-hero-sub]').textContent = SITE_CONTENT.hero.sub;
    el.querySelector('[data-hero-desc]').textContent = SITE_CONTENT.hero.desc;
  },
  contactEmail(el) {
    if (!el) return;
    el.textContent = SITE_CONTENT.contact.email;
  }
};

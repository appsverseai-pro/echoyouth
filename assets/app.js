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
    const avatars = {
      // Longer-hair silhouette
      girl: `
        <svg class="avatar-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.4c-3.4 0-6 2.6-6 6 0 2 .3 4.6 1.2 6.5l1.9-.8c-.4-1-.6-2.1-.6-3.2V9.6a3.5 3.5 0 0 1 7 0v1.3c0 1.1-.2 2.2-.6 3.2l1.9.8c.9-1.9 1.2-4.5 1.2-6.5 0-3.4-2.6-6-6-6z"/>
          <circle cx="12" cy="9.8" r="3.2"/>
          <path d="M5.4 21c0-3.6 3-6.2 6.6-6.2s6.6 2.6 6.6 6.2z"/>
        </svg>`,
      // Short-hair silhouette
      boy: `
        <svg class="avatar-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.4c-2.9 0-5.2 2.3-5.2 5.2 0 .5.1 1 .2 1.5.5-.9 1.4-1.5 2.4-1.5h5.2c1 0 1.9.6 2.4 1.5.1-.5.2-1 .2-1.5 0-2.9-2.3-5.2-5.2-5.2z"/>
          <circle cx="12" cy="9.7" r="3.2"/>
          <path d="M5.4 21c0-3.6 3-6.2 6.6-6.2s6.6 2.6 6.6 6.2z"/>
        </svg>`
    };
    el.innerHTML = SITE_CONTENT.founders.map(f => `
      <div class="founder">
        <div class="avatar" role="img" aria-label="${f.name}">${avatars[f.gender] || avatars.girl}</div>
        <h3>${f.name}</h3>
        <div class="role">${f.role}</div>
        <p>${f.bio}</p>
      </div>`).join('');
  },
  eventTypes(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.events.types
      .map(t => `
        <span class="type-chip" tabindex="0">
          ${t.label}
          <span class="type-blurb" role="tooltip">${t.blurb}</span>
        </span>`)
      .join('');
  },
  upcomingEvents(el) {
    if (!el) return;
    el.innerHTML = SITE_CONTENT.events.upcoming.map(e => {
      let cta;
      if (e.private) {
        cta = `<span class="event-private">Private event</span>`;
      } else {
        const href = e.link || 'contact.html';
        const external = /^https?:\/\//.test(href);
        const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        cta = `<a class="event-link" href="${href}"${attrs}>Save your spot →</a>`;
      }
      return `
      <div class="event-row">
        <div class="event-meta">${e.date}<br>${e.location}</div>
        <div>
          <div class="event-title">${e.title}</div>
          <p class="event-desc">${e.desc}</p>
        </div>
        ${cta}
      </div>`;
    }).join('');
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

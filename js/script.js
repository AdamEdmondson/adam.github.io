function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  grid.innerHTML = PROJECTS.map((p) => {
    const inner = `
      <div class="project-thumb">
        <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy"
             onerror="this.parentElement.classList.add('placeholder'); this.parentElement.innerHTML = '${escapeHtml(p.title)} - add image at ${escapeHtml(p.image)}';">
      </div>
      <p class="project-title">${escapeHtml(p.title)}</p>
	  <p class="project-description">${escapeHtml(p.description || "")}</p>
    `;
    return p.link
      ? `<a class="project-card" href="${p.link}" target="_blank" rel="noopener noreferrer">${inner}</a>`
      : `<div class="project-card">${inner}</div>`;
  }).join("");
}

function renderSocials() {
  const row = document.getElementById("socials-row");
  if (!row || typeof SOCIALS === "undefined") return;

  row.innerHTML = SOCIALS.filter((s) => s.url)
    .map((s) => `
      <a class="social-icon" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(s.label)}" title="${escapeHtml(s.label)}">
        <img src="${s.image}" alt=""
             onerror="this.parentElement.classList.add('placeholder'); this.parentElement.innerHTML = '${escapeHtml(initials(s.label))}';">
      </a>`
    )
    .join("");
}

function initials(label) {
  return String(label)
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
renderSocials();

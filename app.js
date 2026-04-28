function badgeClass(color) {
  return `badge ${color || 'green'}`
}

function renderBadge(badge) {
  if (!badge) return ''
  return `<span class="${badgeClass(badge.color)}">${badge.text}</span>`
}

function renderNavItem(item, isRoot = false) {
  const children = Array.isArray(item.children) ? item.children : []
  const hasChildren = children.length > 0
  const badge = renderBadge(item.badge)

  if (isRoot) {
    const childMarkup = children
      .map((child) => `<a class="nav-child" href="${child.link}">${child.label}${renderBadge(child.badge)}</a>`)
      .join('')

    return `
      <details class="nav-group" open>
        <summary>
          <span class="nav-top">
            <span>${item.label}</span>
            ${item.description ? `<span class="brand-subtitle">${item.description}</span>` : ''}
          </span>
          ${badge}
        </summary>
        <a class="nav-link" href="${item.link}">Overview ${item.label.replace(/^[^\s]+\s*/, '')}</a>
        ${childMarkup}
      </details>
    `
  }

  if (!hasChildren) {
    return `<a class="nav-child" href="${item.link}">${item.label}${badge}</a>`
  }

  return `
    <details class="nav-group">
      <summary>
        <span class="nav-top">
          <span>${item.label}</span>
          ${item.description ? `<span class="brand-subtitle">${item.description}</span>` : ''}
        </span>
        ${badge}
      </summary>
      <a class="nav-link" href="${item.link}">Overview</a>
      ${children.map((child) => renderNavItem(child)).join('')}
    </details>
  `
}

function renderSections() {
  const nav = document.getElementById('nav')
  const data = window.PORTAL_DATA?.sections || []
  nav.innerHTML = data.map((section) => renderNavItem(section, true)).join('')
}

function renderBadges() {
  const badgeRow = document.getElementById('badges')
  const types = window.PORTAL_DATA?.badgeTypes || []
  badgeRow.innerHTML = types
    .map((badge) => `<span class="${badgeClass(badge.color)}">${badge.label}: ${badge.description}</span>`)
    .join('')
}

renderSections()
renderBadges()

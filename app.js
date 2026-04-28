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
  const label = isRoot ? `Overview ${item.label.replace(/^[^\s]+\s*/, '')}` : item.label

  if (isRoot) {
    const childMarkup = children.map((child) => renderNavItem(child)).join('')

    return `
      <details class="nav-group">
        <summary>
          <span class="nav-top">
            <span>${item.label}</span>
            ${item.description ? `<span class="brand-subtitle">${item.description}</span>` : ''}
          </span>
          ${badge}
        </summary>
        <button class="nav-link js-section-toggle" type="button" data-target="${item.link}">${label}</button>
        ${childMarkup}
      </details>
    `
  }

  if (!hasChildren) {
    return `<button class="nav-child js-section-toggle" type="button" data-target="${item.link}">${item.label}${badge}</button>`
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
      <button class="nav-link js-section-toggle" type="button" data-target="${item.link}">Overview</button>
      ${children.map((child) => renderNavItem(child)).join('')}
    </details>
  `
}

function renderSections() {
  const nav = document.getElementById('nav')
  const data = window.PORTAL_DATA?.sections || []
  nav.innerHTML = data.map((section) => renderNavItem(section, true)).join('')
  nav.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement)) return
    const button = target.closest('.js-section-toggle')
    if (!button) return
    const targetId = button.getAttribute('data-target')
    const section = targetId ? document.querySelector(`[data-section="${targetId}"]`) : null
    if (section instanceof HTMLElement) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      section.classList.add('section-highlight')
      window.setTimeout(() => section.classList.remove('section-highlight'), 1200)
    }
  })
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

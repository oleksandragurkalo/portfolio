import { useMemo, useState } from 'react'
import { nav } from '../../data/content.js'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'
import './Nav.css'

function Nav() {
  const ids = useMemo(() => nav.links.map((link) => link.href.slice(1)), [])
  const activeId = useScrollSpy(ids, 58)
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-wrap">
        <a className="logo" href="#home" onClick={() => setOpen(false)}>
          <span className="logo-icon">{'</>'}</span> {nav.logo}
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.href === `#${activeId}` ? 'active' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav

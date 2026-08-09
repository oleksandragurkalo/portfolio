import { useMemo } from 'react'
import { nav } from '../data/content'
import { useScrollSpy } from '../hooks/useScrollSpy'
import './Nav.css'

function Nav() {
  const ids = useMemo(() => nav.links.map((link) => link.href.slice(1)), [])
  const activeId = useScrollSpy(ids, 58)

  return (
    <nav>
      <div className="nav-wrap">
        <a className="logo" href="#home">
          <span className="logo-icon">{'</>'}</span> {nav.logo}
        </a>
        <ul className="nav-links">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={link.href === `#${activeId}` ? 'active' : undefined}>
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

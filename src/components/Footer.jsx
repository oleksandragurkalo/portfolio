import { footer } from '../data/content'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <a className="footer-logo" href="#home">
          <span style={{ color: 'var(--accent)' }}>{'</>'}</span> sandradev.ca
        </a>
        <p className="footer-copy">{footer.copy}</p>
        <div className="footer-links">
          {footer.links.map((link) => {
            const external = link.href.startsWith('http')
            return (
              <a
                key={link.label}
                className="footer-link"
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer

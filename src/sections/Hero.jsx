import { hero } from '../data/content'
import { GithubIcon, LinkedinIcon, EmailIcon } from '../components/Icons'
import heroPhoto from '../assets/oleksandra.jpg'
import './Hero.css'

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
}

function Hero() {
  return (
    <section id="home" style={{ padding: 0, borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        <div className="hero">
          <div>
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 className="hero-name">
              {hero.nameLine1}
              <br />
              <span className="blue">{hero.nameLine2}</span>
            </h1>
            <p className="hero-sub">{hero.sub}</p>
            <div className="hero-ctas">
              {hero.ctas.map((c) => (
                <a key={c.label} href={c.href} className={`btn btn-${c.variant}`}>
                  {c.label}
                </a>
              ))}
            </div>
            <div className="hero-socials">
              {hero.socials.map((s) => {
                const Icon = socialIcons[s.icon]
                const external = s.href.startsWith('http')
                return (
                  <a
                    key={s.label}
                    className="hero-social"
                    href={s.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                  >
                    <Icon />
                    {s.label}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="hero-stats">
            {hero.stats.map((stat) => (
              <div className="hstat" key={stat.label}>
                <div className="hstat-icon" style={stat.bg ? { background: stat.bg } : undefined}>
                  {stat.icon}
                </div>
                <div>
                  <div className="hstat-num">{stat.num}</div>
                  <div className="hstat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-photo-col">
            <div className="dot-grid" />
            <img className="hero-img" src={heroPhoto} alt={`${hero.nameLine1} ${hero.nameLine2}`} />
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              {hero.badge}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

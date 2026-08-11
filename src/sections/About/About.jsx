import { about, bring } from '../../data/content.js'
import { StarIcon } from '../../components/Icons/Icons.jsx'
import './About.css'

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-header">
          <h2 className="sec-title">
            <StarIcon width={16} height={16} className="sec-icon" />
            {about.title}
          </h2>
        </div>
        <div className="about-text">
          {about.text.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <p className="about-bring-label">What I Bring to the Table</p>
        <div className="bring-grid">
          {bring.map((item) => (
            <div className="bring-card" key={item.title}>
              <div className="bring-icon" style={{ background: item.bg }}>
                {item.icon}
              </div>
              <div>
                <p className="bring-title">{item.title}</p>
                <p className="bring-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

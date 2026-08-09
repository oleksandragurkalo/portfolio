import { experience } from '../data/content'
import { BriefcaseIcon } from '../components/Icons'
import './Experience.css'

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-header">
          <h2 className="sec-title">
            <BriefcaseIcon width={16} height={16} className="sec-icon" />
            Experience
          </h2>
        </div>
        <div className="exp-grid">
          <div>
            <div className="exp-header-row">
              <div>
                <p className="exp-role">{experience.role}</p>
                <p className="exp-company">{experience.company}</p>
              </div>
              <span className="exp-date">{experience.date}</span>
            </div>
            <ul className="exp-bullets">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="exp-ach">
            <span className="exp-ach-icon">📈</span>
            <div style={{ flex: 1 }}>
              <p className="exp-ach-title">{experience.achievement.title}</p>
              <p className="exp-ach-text">{experience.achievement.text}</p>
              <span className="exp-ach-big">{experience.achievement.big}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

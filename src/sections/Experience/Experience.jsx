import { experience } from '../../data/content.js'
import { BriefcaseIcon } from '../../components/Icons/Icons.jsx'
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
          <div className="exp-ach-list">
            {experience.achievements.map((achievement) => (
              <div className="exp-ach" key={achievement.title}>
                <div className="exp-ach-top">
                  <span className="exp-ach-icon">{achievement.icon}</span>
                  <span className="exp-ach-big">{achievement.title}</span>
                </div>
                <p className="exp-ach-title">{achievement.label}</p>
                <p className="exp-ach-text">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

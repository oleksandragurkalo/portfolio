import { useState } from 'react'
import { experience, professionalProject, automationCaseStudy } from '../../data/content.js'
import { BriefcaseIcon } from '../../components/Icons/Icons.jsx'
import './Experience.css'

function Experience() {
  const [expanded, setExpanded] = useState(false)

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
            <p className="exp-intro">{experience.intro}</p>
            <ul className="exp-bullets">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <button type="button" className="exp-more" onClick={() => setExpanded((v) => !v)}>
              {expanded ? 'Show less ↑' : 'Project details & approach ↓'}
            </button>

            {expanded && (
              <div className="exp-details">
                <div className="exp-detail-block">
                  <span className="exp-detail-tag">{professionalProject.tag}</span>
                  <p className="exp-detail-title">{professionalProject.title}</p>
                  <ul className="exp-detail-list">
                    {professionalProject.responsibilities.map((item) => (
                      <li key={item.slice(0, 24)}>{item}</li>
                    ))}
                  </ul>
                  <div className="exp-detail-pills">
                    {professionalProject.technologies.map((tech) => (
                      <span className="exp-detail-pill" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="exp-detail-block">
                  <span className="exp-detail-tag">Automation Case Study</span>
                  <p className="exp-detail-title">{automationCaseStudy.title}</p>
                  <p className="exp-detail-text">{automationCaseStudy.problem}</p>
                  <ul className="exp-detail-list">
                    {automationCaseStudy.approach.map((item) => (
                      <li key={item.slice(0, 24)}>{item}</li>
                    ))}
                  </ul>
                  <div className="exp-detail-pills">
                    {automationCaseStudy.demonstrates.map((item) => (
                      <span className="exp-detail-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
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

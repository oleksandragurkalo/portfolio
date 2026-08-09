import { projects } from '../data/content'
import { GithubIcon } from '../components/Icons'
import './Work.css'

const images = import.meta.glob('../assets/projects/*.jpg', { eager: true, import: 'default' })

function imageFor(filename) {
  return images[`../assets/projects/${filename}`]
}

function ProjectCard({ project }) {
  return (
    <div className={`pcard${project.featured ? ' feat' : ''}`}>
      <div className="pcard-preview">
        {project.featured && <span className="feat-badge">⭐ Featured Project</span>}
        <img className="pcard-img" src={imageFor(project.image)} alt={`${project.title} screenshot`} />
      </div>
      <div className="pcard-body">
        <div className="pcard-icon-row">
          <div className="pcard-icon" style={{ background: project.iconBg }}>
            {project.icon}
          </div>
          <span className="pcard-tag">{project.tag}</span>
        </div>
        <p className="pcard-title">{project.title}</p>
        <p className="pcard-desc">{project.desc}</p>
        <div className="pcard-pills">
          {project.pills.map((pill) => (
            <span key={pill.label} className={`pill${pill.variant === 'blue' ? ' blue' : ''}`}>
              {pill.label}
            </span>
          ))}
        </div>
        <div className="pcard-actions">
          {project.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className={`pcard-action${action.ghost ? ' ghost' : ''}`}
            >
              {action.icon === 'github' && <GithubIcon width={12} height={12} />}
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-header">
          <h2 className="sec-title">
            <span className="sec-icon">{'</>'}</span> Selected Work
          </h2>
          <a
            className="sec-link"
            href="https://github.com/oleksandragurkalo?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View all projects →
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

import { useState } from 'react'
import { featuredProject, projects, sideProject } from '../data/content'
import { GithubIcon } from '../components/Icons'
import './Work.css'

const images = import.meta.glob('../assets/projects/*.jpg', { eager: true, import: 'default' })

function imageFor(filename) {
  return images[`../assets/projects/${filename}`]
}

function ProjectPills({ pills }) {
  return (
    <div className="pcard-pills">
      {pills.map((pill) => (
        <span key={pill.label} className={`pill${pill.variant === 'blue' ? ' blue' : ''}`}>
          {pill.label}
        </span>
      ))}
    </div>
  )
}

function ProjectActions({ actions }) {
  return (
    <div className="pcard-actions">
      {actions.map((action) => (
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
  )
}

function ProjectHeader({ project, featured }) {
  return (
    <>
      <div className="pcard-preview">
        {featured && <span className="feat-badge">⭐ Featured</span>}
        <img className="pcard-img" src={imageFor(project.image)} alt={`${project.title} screenshot`} />
      </div>
      <div className="pcard-icon-row">
        <div className="pcard-icon" style={{ background: project.iconBg }}>
          {project.icon}
        </div>
        <span className="pcard-tag">{project.tag}</span>
      </div>
      <p className="pcard-title">{project.title}</p>
      <p className="pcard-meta">
        {project.year} · {project.role}
      </p>
    </>
  )
}

function ReadMoreButton({ expanded, onToggle }) {
  return (
    <button type="button" className="pcard-more" onClick={onToggle}>
      {expanded ? 'Show less ↑' : 'Read more ↓'}
    </button>
  )
}

function ProjectCard({ project, expanded, onToggle }) {
  return (
    <div className="pcard">
      <ProjectHeader project={project} />
      <div className="pcard-body">
        <div className={`pcard-clamp${expanded ? ' expanded' : ''}`}>
          <p className="pcard-desc">{project.desc}</p>
          {project.result && <p className="pcard-result">{project.result}</p>}
        </div>
        <ReadMoreButton expanded={expanded} onToggle={onToggle} />
        <ProjectPills pills={project.pills} />
        <ProjectActions actions={project.actions} />
      </div>
    </div>
  )
}

function CaseStudyCard({ project, expanded, onToggle }) {
  return (
    <div className="pcard pcard-case">
      <ProjectHeader project={project} featured />
      <div className="pcard-body">
        <div className={`pcard-clamp${expanded ? ' expanded' : ''}`}>
          <div className="case-section">
            <span className="case-label">Problem</span>
            <p>{project.caseStudy.problem}</p>
          </div>
          <div className="case-section">
            <span className="case-label">Approach</span>
            {project.caseStudy.approach.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="case-section">
            <span className="case-label">Result</span>
            <p>{project.caseStudy.result}</p>
          </div>
        </div>
        <ReadMoreButton expanded={expanded} onToggle={onToggle} />
        <ProjectPills pills={project.pills} />
        <ProjectActions actions={project.actions} />
      </div>
    </div>
  )
}

function SideProjectCard({ project }) {
  return (
    <div className="pcard-side">
      <img className="pcard-side-img" src={imageFor(project.image)} alt={`${project.title} screenshot`} />
      <div className="pcard-side-body">
        <div className="pcard-side-head">
          <div className="pcard-icon pcard-icon-sm" style={{ background: project.iconBg }}>
            {project.icon}
          </div>
          <span className="pcard-tag">{project.tag}</span>
          <span className="pcard-meta pcard-meta-inline">
            {project.year} · {project.role}
          </span>
        </div>
        <p className="pcard-side-title">{project.title}</p>
        <p className="pcard-desc">{project.desc}</p>
        <div className="pcard-side-footer">
          <ProjectPills pills={project.pills} />
          <ProjectActions actions={project.actions} />
        </div>
      </div>
    </div>
  )
}

function Work() {
  const [expandedId, setExpandedId] = useState(null)
  const toggle = (id) => setExpandedId((current) => (current === id ? null : id))

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
          <CaseStudyCard
            project={featuredProject}
            expanded={expandedId === featuredProject.id}
            onToggle={() => toggle(featuredProject.id)}
          />
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={expandedId === project.id}
              onToggle={() => toggle(project.id)}
            />
          ))}
        </div>

        <SideProjectCard project={sideProject} />
      </div>
    </section>
  )
}

export default Work

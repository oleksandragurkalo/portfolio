import { stack } from '../data/content'
import { LayersIcon } from '../components/Icons'
import './Skills.css'

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-header">
          <h2 className="sec-title">
            <LayersIcon width={16} height={16} className="sec-icon" />
            Tech Stack
          </h2>
        </div>
        <div className="stack-grid">
          {stack.map((cat) => (
            <div className="stack-cat" key={cat.label}>
              <p className="stack-cat-label">{cat.label}</p>
              <div className="stack-pills">
                {cat.items.map((item) => (
                  <span className="stack-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

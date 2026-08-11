import { workflow } from '../../data/content.js'
import './Workflow.css'

function Workflow() {
  return (
    <section id="workflow">
      <div className="wrap">
        <div className="sec-header">
          <h2 className="sec-title">
            <span className="sec-icon">🧭</span> How I Work
          </h2>
        </div>
        <div className="workflow-grid">
          {workflow.map((step) => (
            <div className="wf-step" key={step.number}>
              <span className="wf-number">{step.number}</span>
              <p className="wf-title">{step.title}</p>
              <p className="wf-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow

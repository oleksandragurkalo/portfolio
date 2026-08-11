import { statsBar } from '../../data/content.js'
import './Stats.css'

function Stats() {
  return (
    <section style={{ padding: '0 0 2.5rem' }}>
      <div className="wrap">
        <div className="stats-bar">
          {statsBar.map((stat) => (
            <div className="sbar-item" key={stat.label}>
              <span className="sbar-icon">{stat.icon}</span>
              <div>
                <div className="sbar-num">{stat.num}</div>
                <div className="sbar-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

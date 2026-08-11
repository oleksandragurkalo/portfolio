import { cta, contact } from '../../data/content.js'
import { GithubIcon, LinkedinIcon, EmailIcon, MapPinIcon } from '../../components/Icons/Icons.jsx'
import './Contact.css'

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
}

function Contact() {
  return (
    <div className="bottom-bar" id="contact">
      <div className="wrap">
        <div className="bottom-grid">
          <div className="bottom-cta">
            <p className="bot-eyebrow cta">{cta.eyebrow}</p>
            <h2 className="bot-cta-h">{cta.title}</h2>
            <p className="bot-cta-sub">{cta.sub}</p>
            <a href={cta.action.href} className="btn-white">
              {cta.action.label}
            </a>
          </div>

          <div className="bottom-contact">
            <div className="bot-contact-row">
              <MapPinIcon />
              {contact.location}
            </div>
            <div className="bot-contact-row">
              <EmailIcon />
              {contact.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

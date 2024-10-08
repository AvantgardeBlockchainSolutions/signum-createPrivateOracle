import React from "react";
import "../../styles/frontendBoilerplate/Footer.css"

const links = [
  {
    title: 'Contact',
    link: 'https://linktr.ee/Signum'
  },  
  {
    title: 'Docs',
    link: 'https://signum.win/docs/'
  },  
  {
    title: 'Discord',
    link: ''
  },  
]

function Footer() {
  return (
    <div className="Footer">
      <p className="FooterText">&copy; 2024 SIGNUM</p>

      <nav className="FooterNav">
        {links.map((link, i) => 
          {
            return <a href={link.link} target="_blank" rel="noreferrer" key={`link-${link.title}-${i}`}>
              {link.title}
            </a>
          }
        )}
      </nav>
    </div>
  )
}

export default Footer
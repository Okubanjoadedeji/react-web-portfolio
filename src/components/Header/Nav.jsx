import './Nav.css'


function Nav() {
  return (
    <nav className="flex align-center space-between">
        <h2 className="Logo text-white font-h2">
         Port<span className="text-primary">folio</span>    
        </h2>

        <ul>
          <li className="inline-block"><a  href="/">Home</a></li>
          <li className="inline-block"><a  href="/">About Us </a></li>
          <li className="inline-block"><a  href="/">Services</a></li>
          <li className="inline-block"><a  href="/">Skills</a></li>
          <li className="inline-block"><a  href="/">Contact Us</a></li>
        </ul>
        <a className="sub-btn" href="/">Subscribe</a>
      </nav>
  )
}

export default Nav
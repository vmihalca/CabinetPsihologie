import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background">
        <div className="content has-background has-text-centered">
          <img
            src={logo}
            alt="Psiholog Cluj"
            style={{ width: '80px'}}
          />
        </div>
        <div className="content has-background">
          <div className="container has-background">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Articole
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Despre mine
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/services">
                        Servicii
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social has-text-centered">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
              <div className="column is-4">
                <div className="conta-foot">
                    <h2>Info contact</h2>
                    <div className="line"></div>
                    <div><strong>Telefon: </strong>0744 649 851</div>
                    <div><strong>Adresa: </strong>str. Decebal nr 2., apart 7, Cluj-Napoca</div>
                    <div><strong>E-mail: </strong><a href = "mailto: moldovanmelaniapsi@gmail.com">moldovanmelaniapsi@gmail.com</a></div>
                    <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

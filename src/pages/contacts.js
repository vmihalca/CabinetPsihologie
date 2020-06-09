import React from 'react'
import Layout from '../components/Layout'
import telpic from '../img/call.png'
import address from '../img/home.png'
import mail from '../img/email.png'


const ContaPage = () => {
    return (
        <Layout>
            <section className="section section--gradient conta-section">
                <div className="banner-conta"></div>
                <div className="conta-title">
                    <h2>Contact</h2>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1 conta-column">
                            <div className="contact-info">
                                <h2>Info contact</h2>
                                <div className="line"></div>
                            </div>
                            <div className="contact-icon">
                                <img src={telpic} alt="telephone" style={{ width: '40px'}} />
                                <img src={address} alt="address" style={{ width: '40px'}} />
                                <img src={mail} alt="mail" style={{ width: '40px'}} />
                            </div>
                            <div className="contact-detail">
                                <div>0744 649 851</div>
                                <div>str. Decebal nr 2., apart 7, Cluj-Napoca, Cluj</div>
                                <div><a href = "mailto: moldovanmelaniapsi@gmail.com">moldovanmelaniapsi@gmail.com</a></div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        
    )
}

export default ContaPage
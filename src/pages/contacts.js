import React from 'react'
import Layout from '../components/Layout'



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
                            <h2>Info contact</h2>
                            <div className="line"></div>
                            <div><strong>Telefon: </strong>0744649851</div>
                            <div><strong>Adresa: </strong>str. Decebal nr 2., apart 7, Cluj-Napoca, Cluj</div>
                            <div><strong>E-mail: </strong><a href = "mailto: moldovanmelaniapsi@gmail.com">moldovanmelaniapsi@gmail.com</a></div>
                            <br/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        
    )
}

export default ContaPage
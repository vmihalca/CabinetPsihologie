import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import mel from '../img/mel.jpg'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient about-section">
      <div className="banner-about"></div>
      <div className="about-title">
        <h2>Mă bucur să ne cunoaștem!</h2>
      </div>
      <div className="container">
        <div>
          <div className="column is-10 is-offset-1 about-column">
            <div className="section">
              <div className="about-header">
                <img src={mel} alt="Melania Moldovan" style={{ width: '400px' }} />
                <p>Eu sunt Melania Moldovan, psiholog clinician și psihoteraput cognitiv-comportamental, iar momentan urmez și formarea în psihoterapie pozitivă.</p>
              </div>
              <PageContent className="content about-descript" content={content} />
              <div className="content about-formare">
                <h3>Formare profesională</h3>
                <ul>
                  <li>29 Mai 2020  Workshop  online "Psihoterapia Pozitiva in vreme de pandemie" , România.</li>
                  <li>29 Februarie-1 Martie 2020 ”Working with traumatic memories in patients with complex trauma and dissociation”, Timișoara, România.</li>
                  <li>26 Noiembrie 2019 “Master Class: Schema Therapy pentru cazurile dificile”, București, România;</li>
                  <li>25 februarie- 26 februarie 2019 ”Restructurarea Self-ului: angoasă sau provocare”, Cluj-Napoca, România.</li>
                  <li>Noiembrie 2017 ”Emoția extravagantă. Lucrul cu emoțiile profunde în terapie”, Cluj-Napoca, România</li>
                  <li>9-10 iunie 2017 ”DBT pentru tulburare de personalitate Borderline”, Oradea, România</li>
                  <br/>
                  <li>2019-prezent: Formare Psihoterapie Pozitivă, Asociația de Psihoterapie Pozitivă (APP), Cluj-Napoca, Cluj.</li>
                  <li>2016–prezent: Doctorand în Psihologie, Facultatea de Psihologie și Științe ale Educației, Universitatea Babeș Bolyai, Cluj-Napoca;</li>
                  <li>2016–2019: Formare Psiholog clinician și psihoterapeut, în practică privată – supervizare finalizată sub coordonarea Prof. Univ. Dr. Aurora Szentagotai-Tătar și Psih. Gabriela Hum;</li>
                  <li>2014–216: Master în Psihologie Clinică, Consiliere Psihologică și Psihoterapie, Facultatea de Psihologie și Științe ale Educației, Universitatea Babeș Bolyai, Cluj-Napoca;</li>
                  <li>2011–2014: Licență în Psihologie, Facultatea de Psihologie și Științe ale Educației, Universitatea Babeș Bolyai, Cluj-Napoca; </li>
                </ul>
                <h3>Locuri de muncă</h3>
                <ul>
                  <li>2019-prezent: coordonator Centrul Minții în cadrul Organizației Minte Forte.</li>
                  <li>2017-prezent: Psihoterapeut Organizația Minte Forte</li>
                  <li>2016-prezent: Psihoterpeut la Cabinet Individual de psihologie Moldovan Melania</li>
                </ul>
                <h3>Workshopuri facilitate/evenimente</h3>
                <ul>
                  <li>31 Octombrie 2019- Speaker invitat, împreună cu psihoterapeut Paula Nuțaș la lansarea cărții „Sparge Tiparele: Cum să-ți recapeți libertatea de a fi tu însuți prin terapia schemelor”- Gitta Jacobs, Bookstory, Cluj-Napoca, Cluj.</li>
                  <li>Mai 2019-Workshopuri facilitate în cadrul Seminarului ”Bridge for Mental Health”, Măguri-Răcătău, Cluj.</li>
                  <li>Aprilie 2019-Invitat discuție la EBS radio pe tema ”Burnout” împreună cu psihoterapeut Bogdan Ovidiu Talpoș.</li>
                  <li>Iulie 2018- ”Breaking the Bad” Workshop, Organizația Minte Forte, Cluj-Napoca.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

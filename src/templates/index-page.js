import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import hpic1 from '../img/boat.png'
import hcard1 from '../img/terap_indiv.png'
import hcard2 from '../img/Terap_grup.png'
import hcard3 from '../img/Dezv_pers.png'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div className="banner-wrapper">
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundAttachment: `fixed`
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: '15%'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              lineHeight: '1'
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>
        </div>
      </div>
      <div className="title-quote"><h3>”Trăiește-ți viața în așa fel încât ai fi dispus să îți repeți aceeași viață pentru eternitate” -Irvin Yalom</h3> </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="hsec-one">
          <img src={hpic1} style={{ width: '450px' }} />
        </div>
        <div className="section">
          <h2 className="h2-home">{mainpitch.title}</h2>
            <div className="content">
              <div className="column is-12">
                <div className="home-card-wrapp">
                  <div className="home-card">
                  <img src={hcard1} alt="Terapie individuala" style={{ width: '220px', height:'167px' }} />
                  <h3>Terapie individuală</h3>
                  <p>Psihoterapia individuală presupune întâlniri la care vei participa doar tu și psihoterapeutul, într-un spațiu plăcut și sigur. Tot ceea ce se discută rămâne confidential.</p>
                  <Link className="btn" to="/services/#psih-indiv">
                    Vezi mai mult
                  </Link>
                  </div>
                  <div className="home-card">
                  <img src={hcard3} alt="Dezvoltare personala" style={{ width: '220px', height:'167px' }} />
                  <h3>Dezvoltare personala</h3>
                  <p>Scopul este de a te susține în procesul de auto-explorare și dezvoltare a unor abilități specifice, pentru ca, în final, să îți îndeplinești propriul potențial. </p>
                  <Link className="btn" to="/services/#dezv-pers">
                    Vezi mai mult
                  </Link>
                  </div>
                  <div className="home-card">
                  <img src={hcard2} alt="Terapie de grup" style={{ width: '220px', height:'167px' }} />
                  <h3>Terapie de grup</h3>
                  <p>În psihoterapia de grup ne vom întâlni în grup de 6 și 10  persoane și vom discuta despre o anumită problemă. </p>
                  <Link className="btn" to="/services/#psih-grup">
                    Vezi mai mult
                  </Link>
                  </div>
                </div>
                <div className="call-to-action">
                  <Link className="btn" to="/contacts">
                  Programează o <span>intalnire</span> acum!
                  </Link>
                </div>
                <h3 className="has-text-weight-semibold is-size-2">
                  Articole Recente
                </h3>
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    Toate articolele
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
      }
    }
  }
`

import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
        htmlCode: file(relativePath: { eq: "html_code.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
        htmlColor: file(relativePath: { eq: "html_color.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
        programming: file(relativePath: { eq: "programming.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                        {/* <Img fluid={data.htmlCode.childImageSharp.fluid} /> */}
                    </div>
                    <div className="main-text">
                        Nickolaj Shilov
                    </div>
                    <div className="main-image">
                        {/* <Img fluid={data.programming.childImageSharp.fluid} /> */}
                    </div>
                    <div className="side-image right">
                        {/* <Img fluid={data.htmlCode.childImageSharp.fluid} /> */}
                    </div>
                </div>
                <div className="scroll">
                        <span>Scroll down</span>
                    </div>
            </div>
            <div className="fixed-misc">
                    Web-developer
                </div>
        </div>
    )
}

export default Banner
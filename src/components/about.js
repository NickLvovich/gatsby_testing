import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const AboutBlurb = () => {
    const data = useStaticQuery(graphql`
    query {
        htmlCode: file(relativePath: { eq: "html_code.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1940) {
            ...GatsbyImageSharpFluid
          }
        }
      }
        htmlColor: file(relativePath: { eq: "html_color.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1940) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                    <div className="content">
                      <h3>
                        The Ability to develop
                      </h3>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptatum veniam? Ullam totam accusamus ipsum ab quae consectetur praesentium asperiores maiores iusto ut quo, aut obcaecati, explicabo eligendi. Debitis, quis?
                      Quam, numquam voluptatum, ullam in fugit at minus dolorem nemo, sequi dolorum commodi reprehenderit harum suscipit expedita! Nisi, enim quis? Repellendus suscipit magni sapiente quisquam quo repellat dolorem unde quaerat?
                      Velit culpa voluptatibus esse illum quas consectetur sed reiciendis perspiciatis beatae! Tempore eius repudiandae excepturi libero ratione sunt animi ipsam distinctio dolores, delectus labore modi provident minus neque tenetur ullam.
                      </p>
                      <div className="btn-row">
                        <Link to="/work">View projects</Link>
                      </div>
                    </div>
                    <div className="images">
                      <div className="top-right">
                        {/* <Img fluid={data.htmlCode.childImageSharp.fluid} /> */}
                      </div>
                      <div className="bottom-left">
                        {/* <Img fluid={data.htmlCode.childImageSharp.fluid} /> */}
                      </div>
                    </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
        </div>
    )
}

export default AboutBlurb
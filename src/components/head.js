import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query HeadQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
    )
}

export default Head
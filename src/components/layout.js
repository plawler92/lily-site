import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"

import layoutStyles from "../styles/layout.module.scss"


const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header siteTitle={data.site.siteMetadata?.title} />
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
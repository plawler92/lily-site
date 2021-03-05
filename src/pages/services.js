import * as React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { useStaticQuery } from "gatsby"
import { graphql } from "graphql"

// markup
const Services = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           excerpt
  //           frontmatter {
  //             services
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)


  return (    
    <Layout>
        <Head title="Services" />
        <h1>Services</h1>
        <p>This will be a services page</p>
        {/* <div dangerouslySetInnerHTML={{ __html: data.all}} */}
    </Layout>
  )
}

export default Services
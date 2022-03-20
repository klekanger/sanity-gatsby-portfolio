import { graphql } from 'gatsby'
import React from 'react'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/SEO'
import Layout from '../containers/layout'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      excerpt {
        _key
        _type
        style
        list
        _rawChildren(resolveReferences: { maxDepth: 10 })
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      members {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const ProjectTemplate = (props) => {
  const { data, errors } = props
  const project = data && data.project
  const siteUrl = data.site.siteMetadata.siteUrl

  const imgSrc = imageUrlFor(buildImageObj(project.mainImage))
    .width(1200)
    .height(Math.floor((9 / 16) * 1200))
    .fit('crop')
    .url()

  const blogDesc = project.excerpt[0]._rawChildren[0].text || ''

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || 'Untitled'} image={imgSrc} description={blogDesc} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} url={siteUrl} />}
    </Layout>
  )
}

export default ProjectTemplate

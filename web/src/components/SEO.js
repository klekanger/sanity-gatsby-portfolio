import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import favicon128 from '../images/favicon-128.png'
import favicon152 from '../images/favicon-152.png'
import favicon167 from '../images/favicon-167.png'
import favicon180 from '../images/favicon-180.png'
import favicon192 from '../images/favicon-192.png'
import favicon196 from '../images/favicon-196.png'
import favicon32 from '../images/favicon-32.png'

function SEO({ description, lang, meta, keywords, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription = description || (data.site && data.site.description) || ''
        const siteTitle = (data.site && data.site.title) || ''
        const siteAuthor = (data.site && data.site.author && data.site.author.name) || ''

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:image',
                content: image,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: siteAuthor,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          >
            <link rel="icon" href={favicon32} />
            <link rel="icon" href={favicon128} />
            <link rel="apple-touch-icon" href={favicon152} />
            <link rel="icon" href={favicon167} />
            <link rel="apple-touch-icon" href={favicon180} />
            <link rel="icon" href={favicon192} />
            <link rel="shortcut icon" href={favicon196} />
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`

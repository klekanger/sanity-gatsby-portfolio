// rename to client-config.js
// replace "projectid" with your sanity project id

module.exports = {
    sanity: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'projectid',
        dataset: process.env.GATSBY_SANITY_DATASET || 'production'
    }
}

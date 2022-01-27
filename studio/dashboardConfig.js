export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/klekanger/sanity-gatsby-portfolio',
            category: 'Code'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent projects', order: '_createdAt desc', types: ['project'] },
      layout: { width: 'medium' }
    }
  ]
};

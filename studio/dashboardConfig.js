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
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6820d18bb99f25b87387fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9wbwr6s7',
                  apiId: '80059b49-6a21-4034-92f6-ff938e551841',
                  url: 'https://lekanger.sanity.studio/'
                },
                {
                  buildHookId: '5d6820d11730215828876393',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fz9f4ju3',
                  apiId: 'f7cf00c0-d4e4-445a-b814-93895592acea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/klekanger/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fz9f4ju3.netlify.com',
            category: 'apps'
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

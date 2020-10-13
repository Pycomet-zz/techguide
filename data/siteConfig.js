module.exports = {
  siteTitle: 'TechGuide News Blog',
  siteDescription: 'Get the latest reports on technology news, analysis of emerging trends, and profiling of new business products by Weblulue',
  authorName: 'Alfred Emmanuel',
  twitterUsername: 'code_fredy',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also an occasional tech speaker and a mentor.
  As a digital nomad, he is living where the WiFi and sun are 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" rel="noopener" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://weblulue.com/',
  disqusSiteUrl: 'https://weblulue.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'background.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-2',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/blog.png',
  postsPerPage: 6,
  disqusShortname: 'codefred',
  headerTitle: 'TechGuide',
  headerLinksIcon: 'blog.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com/weblulue',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        // {
        //   label: 'Installation',
        //   url: '/how-to-install',
        // },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/Pycomet',
        },
        {
          label: 'Website',
          url: 'https://www.codefred.me',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/codefredy',
        },
      ],
    },
  ],
}
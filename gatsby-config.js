module.exports = {
  pathPrefix: "/jrpdotjpg.github.io",
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://jrpdotjpg.github.io/`,
    // Your Name
    name: 'Jonathan Paynter',
    // Main Site Title
    title: `Jonathan Paynter | Undergraduate Electronic and Information Engineer`,
    // Description that goes under your name in main bio
    description: `4th year undergraduate Electronic and Information Engineer at Imperial College London.`,
    // Optional: Twitter account handle
    // author: ``,
    github: `https://github.com/jrpdotjpg`,
    linkedin: `www.linkedin.com/in/jonathanpaynter/`,
    about: `I am a 4th year undergraduate student studying Electronic and Information Engineering.
              Pre-lockdown my interests were hiking, running, climbing and swimming, all I hope to resume shortly.
              I am interested in all elements of AI, but specifically I'd like to continue in reinforcement learning, and AI in social science.`,
    projects: [
      {
        name: 'Fake News Detector web app',
        description:
          'Developed during the 2020 IC Hack Hackathon, queried articles are embedded using a language model and compared against similar articles scraped from Google. A score is generated from the articles similarity, factoring in its publish date to account for novel articles.',
        link: 'https://github.com/TRSTICHack/TRST'
      },
      {
        name: 'SimMIPS',
        description: 'A simulator for the MIPS 1 ISA',
        link: 'https://github.com/ALGCDG/SimMIPS'
      },
      {
        name: 'C Compiler',
        description: 'A C (subset) compiler to MIPS 1',
        link: 'https://github.com/ALGCDG/WeRateDAGs'
      },
      {
        name: 'Pool shot prediction',
        description: 'Algorithm on FPGA to show in real time the trajectory of a pool shot, leveraging calibrated colours of key points on the pool table and cue. '
      },
      {
        name: 'Mastermind Playing Algorithm',
        description:
          'Solving the game of "Mastermind" up to code lengths of 15 using an adaptive combination of a particle swarm algorithm, a genetic algorithm and minimax, depending on length.',
      },
    ],
    experience: [
      {
        name: 'Research Placement at Imperial College',
        description: 'Working to create a learnable Bayesian updating model for use in robotic manipulation. March 2020 - present',
      },
      {
        name: 'Mindsheet Ltd.',
        description: 'Data Analytics Consultant - modelling natural language identifiers. December 2020 (1 week)',
        // link:
      },
      {
        name: 'ARM ',
        description: 'Software Engineering Intern, Python. Summer 2020 (3 months)',
        // link:
      },
    
    ],
    skills: [
      {
        name: 'Languages and Frameworks',
        description:
          'Python (PyTorch, Tensorflow), C++, Prolog, SQL, LabVIEW',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `projectposts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

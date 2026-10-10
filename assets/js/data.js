/*
 * data.js — the single place to edit your personal info.
 *
 * Everything shown on the site (name, role, about text, skills, projects,
 * experience, contact links) is read from window.PORTFOLIO below and rendered
 * by assets/js/main.js. Edit the values here; no HTML changes needed.
 *
 * Tips:
 *  - Set a social URL to "" (empty string) to hide that icon.
 *  - Project `tags` drive the filter buttons (e.g. "web", "api", "tooling").
 *  - Leave `repo` or `demo` as "" to hide that link on a project card.
 *  - If `projects` is an empty array, main.js will try to show your latest
 *    public GitHub repositories instead.
 */
window.PORTFOLIO = {
  name: 'Ian Muema',
  initials: 'IM',
  role: 'Software Developer',
  tagline: 'I build fast, accessible and reliable software for the web — from clean interfaces to the APIs behind them.',
  email: 'you@example.com',
  githubUser: 'muema825',

  socials: {
    github: 'https://github.com/muema825',
    linkedin: 'https://www.linkedin.com/in/your-handle',
    twitter: 'https://x.com/your-handle'
  },

  about: [
    "Hi! I'm Ian, a software developer who enjoys turning ideas into products people actually like using. I care about clean code, thoughtful design and the small details that make an experience feel effortless.",
    'Most of my work sits across the stack: building responsive, accessible front ends and the services and APIs that power them. I like simple tools, readable code and automating anything I have to do twice.',
    "When I'm not coding I'm usually learning something new, contributing to side projects, or exploring how good engineering practices can help small teams ship with confidence."
  ],

  skills: [
    { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'] },
    { group: 'Frontend', items: ['React', 'Responsive design', 'Accessibility', 'Vite', 'Tailwind CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'Django', 'REST APIs', 'PostgreSQL', 'MongoDB'] },
    { group: 'Tools & Platforms', items: ['Git & GitHub', 'GitHub Actions', 'Docker', 'Linux', 'VS Code', 'Figma'] }
  ],

  projects: [
    {
      title: 'Portfolio Website',
      description: 'This site: a fast, accessible, dependency-free personal portfolio with dark mode, project filtering and automated deployment to GitHub Pages.',
      tags: ['web'],
      tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Actions'],
      repo: 'https://github.com/muema825/Portfolio-Website',
      demo: 'https://muema825.github.io/Portfolio-Website/'
    },
    {
      title: 'Task Tracker API',
      description: 'A RESTful API for managing projects and tasks with authentication, pagination and input validation. Documented with OpenAPI.',
      tags: ['api'],
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      repo: 'https://github.com/muema825',
      demo: ''
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive dashboard showing current conditions and a 5-day forecast for any city, with saved locations and unit switching.',
      tags: ['web', 'api'],
      tech: ['React', 'Vite', 'OpenWeather API'],
      repo: 'https://github.com/muema825',
      demo: ''
    },
    {
      title: 'Expense Splitter',
      description: 'A small web app for splitting shared expenses among friends and settling up with the fewest possible payments.',
      tags: ['web'],
      tech: ['TypeScript', 'React', 'Local Storage'],
      repo: 'https://github.com/muema825',
      demo: ''
    },
    {
      title: 'Repo Scaffolder CLI',
      description: 'A command-line tool that bootstraps new projects with linting, formatting, CI workflows and a sensible folder structure in seconds.',
      tags: ['tooling'],
      tech: ['Python', 'Click', 'GitHub Actions'],
      repo: 'https://github.com/muema825',
      demo: ''
    },
    {
      title: 'Link Shortener',
      description: 'A URL shortening service with click analytics, custom aliases and rate limiting, deployed in a Docker container.',
      tags: ['api', 'tooling'],
      tech: ['Django', 'Redis', 'Docker'],
      repo: 'https://github.com/muema825',
      demo: ''
    }
  ],

  experience: [
    {
      role: 'Software Developer',
      org: 'Company Name',
      date: '2023 — Present',
      points: [
        'Build and maintain customer-facing web features used by thousands of users.',
        'Designed REST endpoints and database schemas for new product areas.',
        'Introduced automated tests and CI checks that reduced regressions.'
      ]
    },
    {
      role: 'Junior Web Developer',
      org: 'Agency Name',
      date: '2021 — 2023',
      points: [
        'Delivered responsive, accessible websites for small-business clients.',
        'Collaborated with designers to turn mockups into reusable components.',
        'Improved page performance scores through image and asset optimisation.'
      ]
    },
    {
      role: 'Software Engineering Intern',
      org: 'Startup Name',
      date: '2020 — 2021',
      points: [
        'Contributed bug fixes and small features to an internal dashboard.',
        'Wrote scripts to automate repetitive data-cleaning tasks.',
        'Learned code review, Git workflows and agile delivery practices.'
      ]
    }
  ]
};

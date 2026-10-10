/*
 * data.js — the single place to edit your personal info.
 *
 * Everything shown on the site (name, role, about text, skills,
 * certifications, projects, experience, contact links) is read from
 * window.PORTFOLIO below and rendered by assets/js/main.js. Edit the values
 * here; no HTML changes needed.
 *
 * Tips:
 *  - Set a social URL to "" (empty string) to hide that icon.
 *  - Project `tags` drive the filter buttons (e.g. "security", "web").
 *  - Leave `repo` or `demo` as "" to hide that link on a project card
 *    (private repositories have no public repo link).
 *  - If `projects` is an empty array, main.js will try to show your latest
 *    public GitHub repositories instead.
 */
window.PORTFOLIO = {
  name: 'Ian Muema',
  initials: 'IM',
  role: 'Cybersecurity & Full-Stack Developer',
  tagline: 'CompTIA Security+ and CCNA certified. I build web systems and then try to break them — vulnerability assessment, secure code review and hardening for platforms people need to trust.',
  email: 'muemaian484@gmail.com',
  githubUser: 'muema825',

  socials: {
    github: 'https://github.com/muema825',
    linkedin: '',
    twitter: ''
  },

  about: [
    "I'm Ian, an ICT professional based in Machakos, Kenya, with a Bachelor of Business Information Technology (Business Intelligence) from Strathmore University. I'm a cybersecurity enthusiast who also builds the systems I'm protecting.",
    'Across internships at Kwetu Sacco, Konza Technopolis Development Authority and the ICT Authority I have run vulnerability scans and penetration tests, reviewed code against the OWASP Top 10, built log monitoring to catch threats early, and documented and prioritised vulnerabilities for remediation.',
    'On the development side I build full-stack platforms with security designed in from the start: server-enforced roles, rate limiting, tamper-evident audit logs, hashed secrets and strict security headers. I care about delivering secure, reliable ICT solutions for academic, financial and public-sector environments.'
  ],

  skills: [
    { group: 'Security', items: ['Vulnerability assessment', 'Penetration testing', 'OWASP Top 10', 'Secure code review', 'Log monitoring & SIEM', 'Threat analysis', 'Risk documentation'] },
    { group: 'Networking & Cloud', items: ['Routing & switching', 'Network troubleshooting', 'AWS', 'Linux', 'Docker', 'Nginx & TLS', 'Prometheus & Grafana'] },
    { group: 'Development', items: ['TypeScript', 'Python', 'Next.js', 'React', 'Django', 'Flask / FastAPI', 'PostgreSQL', 'Redis', 'Flutter', 'Kotlin', 'Solidity'] },
    { group: 'Data & AI', items: ['pandas', 'scikit-learn', 'NLP', 'Azure AI', 'Data governance', 'Data quality'] }
  ],

  certifications: [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      detail: 'SY0-701 — threats, vulnerabilities, security architecture, operations and governance.',
      date: 'Issued Mar 2026 · Valid to Mar 2029',
      verify: 'https://verify.comptia.org'
    },
    {
      name: 'CCNA Routing and Switching',
      issuer: 'Cisco',
      detail: 'Industry-standard networking: routing, switching and infrastructure troubleshooting.',
      date: '',
      verify: ''
    },
    {
      name: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      detail: 'Cloud computing concepts, security practices and scalable infrastructure deployment.',
      date: '',
      verify: ''
    },
    {
      name: 'Data Governance',
      issuer: 'Certified program',
      detail: 'Data quality procedures, access controls and regulatory compliance.',
      date: '',
      verify: ''
    }
  ],

  projects: [
    {
      title: 'OUK Exam Proctor',
      description: 'Self-hosted remote exam proctoring for the Open University of Kenya. Face verification, live camera/mic supervision and browser anti-cheat signals, with server-enforced roles, Redis rate limiting, scrypt password hashing, security headers and a hash-chained, tamper-evident audit log (NIST 800-92).',
      tags: ['security', 'web'],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'LiveKit', 'DeepFace', 'Nginx', 'Grafana'],
      repo: '',
      demo: ''
    },
    {
      title: 'ZawaDigital Gift Cards',
      description: 'Gift-card marketplace for local businesses with buyer, merchant and admin roles. Redemption codes are HMAC-derived and stored only as bcrypt hashes; adds CSP with violation reporting, HSTS, rate limiting, idle-session timeouts, OTP merchant onboarding and an admin audit trail.',
      tags: ['security', 'web', 'fintech'],
      tech: ['Next.js', 'TypeScript', 'Convex', 'Better Auth', 'M-Pesa', 'Cloudflare Workers'],
      repo: '',
      demo: 'https://zawadigital.co'
    },
    {
      title: 'Tajiri Shambani',
      description: 'Agricultural investment platform connecting farmers and investors, with a marketplace and M-Pesa checkout. Email-verified auth, per-route rate limits, hardened session cookies, server-side role checks following OWASP guidance and open-redirect protection.',
      tags: ['security', 'web', 'fintech'],
      tech: ['Next.js', 'TypeScript', 'better-auth', 'PostgreSQL', 'Upstash Redis', 'Zod'],
      repo: '',
      demo: ''
    },
    {
      title: 'Liquidate',
      description: 'Team project tokenising real-world assets such as real estate into fractional ERC-1155 shares, with wallet sign-in, a Next.js marketplace and validated purchase APIs.',
      tags: ['blockchain', 'web'],
      tech: ['Solidity', 'OpenZeppelin', 'Hardhat', 'Next.js', 'Prisma', 'wagmi'],
      repo: '',
      demo: ''
    },
    {
      title: 'Rental Manager',
      description: 'Cross-platform landlord and tenant app: units, QR tenant invites, payments with PDF receipts, complaints chat and offline sync, with unit, widget and end-to-end tests.',
      tags: ['mobile'],
      tech: ['Flutter', 'Dart', 'Patrol', 'Maestro'],
      repo: '',
      demo: ''
    },
    {
      title: 'Suicide-Risk Text Classifier API',
      description: 'FastAPI service that preprocesses free text (stop-word removal, stemming) and flags suicide-risk language with a Naive Bayes model. Containerised and deployed through a GitHub Actions pipeline with credentials kept in repository secrets.',
      tags: ['ml'],
      tech: ['Python', 'FastAPI', 'NLTK', 'scikit-learn', 'Docker', 'GitHub Actions'],
      repo: 'https://github.com/Muema825/BI2-Project',
      demo: ''
    },
    {
      title: 'Crypto Prices',
      description: 'Android app (group project) showing live cryptocurrency prices and history charts over HTTPS, cached in Room for offline use, with minimal permissions and instrumented tests.',
      tags: ['mobile'],
      tech: ['Kotlin', 'Retrofit', 'Room', 'MVVM', 'GitHub Actions'],
      repo: 'https://github.com/Muema825/Crypro-Prices',
      demo: ''
    }
  ],

  experience: [
    {
      role: 'IT Support / Network Security / Developer Intern',
      org: 'Kwetu Sacco, Machakos',
      date: 'Apr 2025 — Nov 2025',
      points: [
        'Conducted secure code reviews, vulnerability assessments and basic penetration testing on web applications, applying OWASP Top 10 principles.',
        'Implemented application-level monitoring and logging to analyse system and security events for early vulnerability detection.',
        'Documented application architectures, APIs and identified security risks to support remediation and audits.',
        'Developed, deployed and maintained web-based systems and automated services using modern DevOps practices.'
      ]
    },
    {
      role: 'IT Support & Network Security Intern',
      org: 'Konza Technopolis Development Authority',
      date: 'Jan 2024 — Aug 2024',
      points: [
        'Ran regular vulnerability scans and penetration tests, improving security posture by 25%.',
        'Implemented monitoring to analyse security logs, identifying 15 potential threats.',
        'Built a documentation and prioritisation system for 20+ vulnerabilities.',
        'Automated 50+ software installations and maintained 30+ devices with minimal downtime.'
      ]
    },
    {
      role: 'Network Systems Intern',
      org: 'ICT Authority, Nairobi',
      date: 'Jan 2023 — Apr 2023',
      points: [
        'Resolved 40+ critical network issues as a troubleshooting specialist.',
        'Maintained 99% network uptime through proactive monitoring and maintenance.',
        'Integrated 10 new applications and systems into existing infrastructure.'
      ]
    },
    {
      role: 'Data Management & Web Content Specialist',
      org: 'Merrge PTY (AUS) Ltd — Remote',
      date: 'Sep 2020 — Dec 2020',
      points: [
        'Implemented data governance practices, improving data retrieval efficiency by 25%.',
        'Maintained and validated databases of 500+ entries at 99% accuracy.',
        'Configured and maintained the CMS, reducing update time by 30%.'
      ]
    },
    {
      role: 'BBIT (Business Intelligence), Second Class Upper',
      org: 'Strathmore University',
      date: '2020 — 2024',
      points: [
        'Final-year project: machine-learning mental-health screening web app (Django, scikit-learn).'
      ]
    }
  ]
};

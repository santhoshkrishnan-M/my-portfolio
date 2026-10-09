import type { Project, SkillCategory, Certification, Achievement } from '../types';

export const personalInfo = {
  name: 'Santhosh Krishnan M.',
  title: 'Aspiring Cybersecurity Professional',
  subtitles: [
    'Ethical Hacking Student',
    'Penetration Testing Learner',
    'Python Developer',
    'Web Security Enthusiast'
  ],
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'santhoshkrishnan256@gmail.com',
  linkedin: 'https://linkedin.com/in/santhosh-krishnan-m/',
  github: 'https://github.com/santhoshkrishnan-M',
  education: {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'SNS College of Technology',
    location: 'Coimbatore, Tamil Nadu',
    period: '2024 – 2028',
    status: 'Currently Pursuing'
  },
  careerGoal: 'Obtain cybersecurity internships and entry-level opportunities in ethical hacking, web application security testing, vulnerability assessment, and security analysis.',
  availability: 'Open to Cybersecurity Internship Opportunities',
  bio: "I'm a Computer Science and Engineering student at SNS College of Technology with a growing interest in cybersecurity and ethical hacking. I enjoy understanding how systems work, exploring security tools, and building practical software projects. My current focus is strengthening my programming fundamentals, learning web application security testing, and developing the practical skills required for a cybersecurity career."
};

export const focusAreas = [
  {
    number: '01',
    title: 'Security Mindset',
    description: 'Learning how vulnerabilities arise in modern applications and how systematic security testing helps identify and remediate weaknesses before exploitation.',
    tags: ['Vulnerability Assessment', 'Threat Modeling', 'Web Security Basics']
  },
  {
    number: '02',
    title: 'Practical Learning',
    description: 'Exploring industry-standard security tools, network monitoring, Python scripting, and conducting controlled laboratory exercises to understand attack vectors.',
    tags: ['Burp Suite', 'Wireshark', 'Nmap', 'Metasploit Exposure']
  },
  {
    number: '03',
    title: 'Building Solutions',
    description: 'Developing technical projects that combine software engineering, multi-agent workflows, AI integration, and security automation to solve real-world problems.',
    tags: ['Python Automation', 'React & TypeScript', 'RAG Architectures']
  }
];

export const projectsData: Project[] = [
  {
    id: 'tandex-v3',
    number: '01',
    title: 'TANDEX V3',
    subtitle: 'Automotive Multi-Agent Supply Chain Control Tower',
    fullTitle: 'Automotive Multi-Agent Supply Chain Control Tower',
    description: 'An automotive supply chain intelligence project designed to identify supplier disruptions, forecast demand, coordinate operational agents, evaluate decisions, and generate management reports.',
    technologies: [
      'SNS Agent Workbench',
      'n8n-style workflows',
      'Python/code nodes',
      'NetworkX',
      'Zoho Inventory connector'
    ],
    workflow: [
      'Forecast Demand',
      'Detect Supply Chain Risk',
      'Coordinate Multi-Agents',
      'Negotiate Alternatives',
      'Validate Decisions',
      'Generate Executive Report'
    ],
    image: '/images/tandex.jpg',
    category: 'Multi-Agent AI',
    status: 'Prototype / Research Exploration',
    note: 'The patent potential of this architecture has been explored as part of technical research; no granted patent is implied.',
    detailedOverview: 'Tandex V3 is an experimental automotive supply chain control tower that leverages autonomous agent orchestration to monitor global supplier networks. It continuously ingests inventory telemetries, maps supplier dependency graphs, and flags operational bottlenecks.',
    problemAddressed: 'Modern automotive manufacturing supply chains are susceptible to component shortages, geopolitical delays, and single-point supplier failures that halt assembly lines.',
    proposedSolution: 'A multi-agent network using n8n-style graph logic and NetworkX topological analysis to automatically detect risk nodes, run predictive simulations, coordinate autonomous resolution agents, and present actionable dashboards to supply chain managers.'
  },
  {
    id: 'finora',
    number: '02',
    title: 'FINORA',
    subtitle: 'Multilingual AI Fintech Assistant',
    fullTitle: 'Multilingual AI Fintech Assistant',
    description: 'A personal finance platform concept combining stock-market information, expense tracking, savings analysis, and AI-assisted financial guidance.',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Express',
      'SQLite',
      'Recharts',
      'Kite Connect API',
      'Gemini 2.0 Flash'
    ],
    features: [
      'Multilingual interface tailored for Indian users',
      'Automated expense tracking & financial health summaries',
      'Real-time stock-market information via Kite Connect API',
      'AI-assisted financial guidance using Gemini 2.0 Flash',
      'Structured 33% Savings / 67% Expenses budgeting concept'
    ],
    image: '/images/finora.jpg',
    category: 'Fintech & AI',
    status: 'Functional Project Concept',
    note: 'The 33% savings and 67% expenses model represents the project proposed budgeting approach, not a universal financial recommendation.',
    detailedOverview: 'Finora is an AI-powered financial companion designed to break language barriers in financial literacy. By combining live Indian stock market tracking with generative AI explanations, users receive personalized budget insights in regional languages.',
    problemAddressed: 'Complex financial jargon and English-only fintech tools prevent millions of users from making informed budgeting and investment decisions.',
    proposedSolution: 'A multi-lingual React dashboard integrating Gemini 2.0 Flash for natural language queries, financial telemetry visualization with Recharts, and automated budget allocation rules.'
  },
  {
    id: 'cisse',
    number: '03',
    title: 'CISSE',
    subtitle: 'Research Paper RAG System',
    fullTitle: 'Research Paper Retrieval-Augmented Generation (RAG) System',
    description: 'A research-paper question-answering system designed to retrieve relevant information from technical documents and generate responses grounded in retrieved source material.',
    technologies: [
      'Python',
      'Google Colab',
      'BGE-M3',
      'BGE-base',
      'ChromaDB',
      'BM25',
      'Streamlit',
      'Flan-T5'
    ],
    features: [
      'Hybrid Retrieval (Dense BGE-M3 Vector Search + Sparse BM25 Keyword Search)',
      'Vector Embedding Storage via ChromaDB',
      'Source-grounded Answer Generation with Flan-T5',
      'Interactive Document QA Streamlit Interface'
    ],
    image: '/images/cisse.jpg',
    category: 'AI & RAG',
    status: 'Completed Academic Project',
    detailedOverview: 'CISSE is a specialized Retrieval-Augmented Generation pipeline built to process dense technical papers. It eliminates LLM hallucinations by grounding responses strictly within retrieved document chunks.',
    problemAddressed: 'Reading through dozens of 30-page academic papers to extract specific formulas or experimental results is time-consuming, and general AI models often hallucinate technical details.',
    proposedSolution: 'A hybrid retrieval engine using ChromaDB for dense semantic vectors combined with BM25 for precise keyword matching, delivering verifiable source snippets alongside concise answers.'
  },
  {
    id: 'keylogger-demo',
    number: '04',
    title: 'KEYBOARD EVENT LOGGER',
    subtitle: 'Cybersecurity Learning Demonstration',
    fullTitle: 'Python Keyboard Event Logging & Monitoring Task',
    description: 'A Python-based keyboard-event logging task undertaken during cybersecurity internship learning, focused on understanding keyboard-event monitoring in controlled environments.',
    technologies: [
      'Python',
      'pynput'
    ],
    ethicalNote: 'For authorized, controlled testing environments only.',
    features: [
      'Low-level keyboard hook listening via pynput',
      'Event payload timestamping and log buffer formatting',
      'Understanding system event listeners in OS environments',
      'Analyzing input telemetry for security auditing'
    ],
    image: '/images/keylogger.jpg',
    category: 'Cybersecurity',
    status: 'Educational Security Lab Task',
    detailedOverview: 'This project was constructed as an educational exercise during cybersecurity training to understand how operating systems intercept input events, how event hooks function in memory, and how security monitoring agents detect unauthorized key logging activity.',
    problemAddressed: 'Understanding endpoint threat mechanics requires hands-on exploration of input hooks and telemetry logging within controlled isolation.',
    proposedSolution: 'A clean Python script using pynput to log keystrokes to a local file in an isolated virtual lab environment, paired with defense documentation explaining input hook detection.'
  },
  {
    id: 'sns-faq',
    number: '05',
    title: 'SNS COLLEGE FAQ AUTOMATION',
    subtitle: 'Campus Workflow & FAQ Prototype',
    fullTitle: 'SNS College FAQ Chatbot & Workflow Automation Prototype',
    description: 'A college FAQ chatbot and workflow automation prototype designed to organize and deliver answers to common student questions.',
    technologies: [
      'Workflow Automation (n8n-style)',
      'Webhooks',
      'Google Sheets',
      'REST APIs'
    ],
    features: [
      'Categorized FAQ Lookup: Library, Attendance, Placement, Certificates, Examinations',
      'Webhook-triggered query routing',
      'Google Sheets backend synchronization for live policy updates',
      'Interactive student chat interface prototype'
    ],
    image: '/images/sns_faq.jpg',
    category: 'Workflow Automation',
    status: 'Prototype Under Development',
    note: 'This project is a student prototype under development and is not officially deployed by the institution.',
    detailedOverview: 'SNS College FAQ Automation is designed to streamline institutional inquiry handling by routing incoming student queries through automated logic workflows to retrieve official guidelines.',
    problemAddressed: 'Administrative offices spend considerable hours manually answering repetitive student queries regarding library hours, certificate issue procedures, and examination timetables.',
    proposedSolution: 'An automated workflow leveraging n8n webhooks and structured Google Sheets data tables to deliver instant, accurate responses to student queries 24/7.'
  },
  {
    id: 'food-calorie-app',
    number: '06',
    title: 'FOOD & CALORIE TRACKER APP',
    subtitle: 'Mobile Application Concept',
    fullTitle: 'Food Delivery App with Built-in Calorie Tracker',
    description: 'A mobile application concept combining food ordering with calorie tracking to help users view food choices and nutritional information.',
    technologies: [
      'FlutterFlow',
      'Firebase Concept',
      'UI/UX Prototyping'
    ],
    features: [
      'Food item catalog with real-time calorie & macro breakdowns',
      'Integrated meal ordering and basket management',
      'Visual daily caloric goal progress indicators',
      'Clean touch-optimized mobile navigation'
    ],
    image: '/images/food_app.jpg',
    category: 'Mobile App',
    status: 'Portfolio Concept / Prototype',
    detailedOverview: 'A cross-platform mobile UI concept designed in FlutterFlow that unifies online meal selection with personal fitness tracking.',
    problemAddressed: 'Users who track their daily caloric intake often struggle to estimate nutrition when ordering meals from delivery platforms.',
    proposedSolution: 'Combining food menu items directly with macronutrient (protein, carbs, fats) counters so users can make healthier ordering decisions without leaving the application.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', tag: 'Primary Language' },
      { name: 'C', tag: 'Systems & Logic' },
      { name: 'JavaScript / TypeScript', tag: 'Web Logic' }
    ]
  },
  {
    title: 'Cybersecurity Concepts',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Ethical Hacking Fundamentals', level: 'Beginner' },
      { name: 'Penetration Testing Concepts', level: 'Introductory' },
      { name: 'Web Application Security', level: 'Learning' },
      { name: 'Vulnerability Assessment', level: 'Core Interest' }
    ]
  },
  {
    title: 'Security Tools',
    icon: 'Terminal',
    skills: [
      { name: 'Burp Suite', level: 'Beginner' },
      { name: 'Wireshark', level: 'Beginner' },
      { name: 'Nmap', level: 'Beginner' },
      { name: 'Metasploit', level: 'Basic Exposure' }
    ]
  },
  {
    title: 'Development & Automation',
    icon: 'Cpu',
    skills: [
      { name: 'GitHub', tag: 'Version Control' },
      { name: 'n8n Workflows', level: 'Beginner' },
      { name: 'React & TypeScript', tag: 'Project Experience' },
      { name: 'Python App Dev', tag: 'Practical' }
    ]
  },
  {
    title: 'AI & Data Technologies',
    icon: 'Brain',
    skills: [
      { name: 'RAG Concepts', tag: 'Document QA' },
      { name: 'Sentence Embeddings & Dense Search', tag: 'BGE-M3' },
      { name: 'ChromaDB & BM25', tag: 'Project Experience' },
      { name: 'Streamlit', tag: 'Rapid Prototyping' }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'guvi-cyber',
    title: 'Advanced Cyber Security and Ethical Hacking',
    issuer: 'GUVI Geek Network',
    category: 'Certification',
    badge: 'GUVI',
    description: 'Comprehensive fundamentals course covering network security principles, threat analysis, ethical hacking methodology, and web application vulnerabilities.'
  },
  {
    id: 'cisco-intro-cyber',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'Certification',
    badge: 'Cisco',
    description: 'Foundational learning covering digital safety, network privacy, common attack vectors, malware types, and defensive strategies.'
  },
  {
    id: 'linkedin-ethical-hacking',
    title: 'Introduction to Ethical Hacking',
    issuer: 'LinkedIn Learning',
    category: 'Course',
    badge: 'LinkedIn',
    description: 'Structured introduction to ethical hacking frameworks, penetration testing phases, reconnaissance techniques, and security controls.'
  },
  {
    id: 'forage-tata',
    title: 'Tata Cybersecurity Analyst Job Simulation',
    issuer: 'Forage / Tata Group',
    category: 'Job Simulation',
    badge: 'Forage',
    description: 'Practical simulation analyzing network traffic logs, evaluating IAM policies, drafting vulnerability reports, and recommending security controls.'
  },
  {
    id: 'forage-deloitte',
    title: 'Deloitte Australia Cyber Job Simulation',
    issuer: 'Forage / Deloitte Australia',
    category: 'Job Simulation',
    badge: 'Forage',
    description: 'Simulated consulting engagement reviewing client security posture, assessing breach scenarios, and suggesting threat mitigation steps.'
  },
  {
    id: 'forage-commbank',
    title: 'Commonwealth Bank Introduction to Cybersecurity',
    issuer: 'Forage / Commonwealth Bank',
    category: 'Job Simulation',
    badge: 'Forage',
    description: 'Hands-on job simulation focusing on fraud detection logic, social engineering awareness, and basic security Incident response.'
  },
  {
    id: 'cybrary-careers',
    title: 'Careers in Cybersecurity',
    issuer: 'Cybrary',
    category: 'Course',
    badge: 'Cybrary',
    description: 'Overview of cybersecurity career pathways, SOC analysis responsibilities, penetration testing roles, and security domain specializations.'
  },
  {
    id: 'ibm-python-ds',
    title: 'Python for Data Science',
    issuer: 'IBM',
    category: 'Course',
    badge: 'IBM',
    description: 'Practical training in Python data structures, pandas, NumPy, API interactions, and scripting for automation.'
  },
  {
    id: 'ibm-design-thinking',
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    category: 'Certification',
    badge: 'IBM',
    description: 'Human-centered design methodology focusing on user empathy, rapid prototyping, problem definition, and team collaboration.'
  },
  {
    id: 'oracle-ai',
    title: 'AI Foundations',
    issuer: 'Oracle',
    category: 'Course',
    badge: 'Oracle',
    description: 'Foundational concepts in artificial intelligence, machine learning algorithms, deep learning structures, and cloud AI services.'
  },
  {
    id: 'ibm-ai-fund',
    title: 'AI Fundamentals',
    issuer: 'IBM',
    category: 'Course',
    badge: 'IBM',
    description: 'Introduction to AI concepts, neural networks, natural language processing, generative AI applications, and ethical AI principles.'
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'code-cubicle',
    title: 'Code Cubicle 5.0 — Hackathon Finalist',
    organization: 'Technical Hackathon',
    role: 'Team Lead / Contributor',
    description: 'Advanced to the final round of Code Cubicle 5.0 hackathon by presenting a novel software prototype built under competitive time constraints.',
    type: 'Hackathon'
  },
  {
    id: 'innovatex-sns',
    title: 'InnovateX SNS — AI Smart Solutions Finalist',
    organization: 'SNS College of Technology',
    role: 'Project Developer',
    description: 'Recognized as an AI Smart Solutions finalist for developing innovative AI-integrated application workflow concepts.',
    type: 'Hackathon'
  },
  {
    id: 'ideathon-2nd',
    title: 'Ideathon — Second Prize Winner',
    organization: 'College Technical Symposium',
    role: 'Presenter',
    description: 'Secured Second Prize in a competitive ideathon event by proposing structured technological solutions to real-world challenges.',
    type: 'Ideathon'
  },
  {
    id: 'paper-pres-2nd',
    title: 'Paper Presentation — Second Prize',
    organization: 'Karpagam Academy of Higher Education, Coimbatore',
    role: 'Research Author & Presenter',
    description: 'Awarded Second Prize at the inter-institutional paper presentation for technical delivery and research clarity.',
    type: 'Paper Presentation'
  },
  {
    id: 'tech-hackathons',
    title: 'Active Technical Hackathon & Ideathon Participant',
    organization: 'Various Academic Bodies',
    role: 'Participant',
    description: 'Consistently participating in university and regional hackathons to develop rapid prototyping, problem-solving, and team collaboration skills.',
    type: 'Hackathon'
  },
  {
    id: 'red-cross',
    title: 'Youth Red Cross Volunteering & Technical Event Coordination',
    organization: 'Youth Red Cross Society',
    role: 'Student Volunteer & Coordinator',
    description: 'Actively volunteering in community outreach programs while assisting in organizing campus technical symposiums and events.',
    type: 'Volunteering'
  }
];

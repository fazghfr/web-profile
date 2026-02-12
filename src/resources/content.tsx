import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahmad",
  lastName: "Fauzan",
  name: `Ahmad Fauzan Alghifari`,
  role: "Backend developer",
  avatar: "/images/avatar.jpg",
  email: "fauzanalghifari963@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English | B1 Level", "Bahasa | Native"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fazghfr/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmad-fauzan-alghifari",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ahmad, a backend developer currently interning at Sinergi Informatika Semen Indonesia,
      where I maintain e-procurement platforms.
      <br /> After hours, I build projects with Go, Laravel, and machine learning.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Backend developer and recent Informatics Engineering graduate from ITS with expertise in
        Laravel/React and Go. Currently maintaining e-procurement platforms at Sinergi Informatika,
        with experience in REST API development, PostgreSQL optimization, and Docker deployment.
        Passionate about building scalable systems and exploring machine learning applications.
      </>
    ),
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Institut Teknologi Sepuluh Nopember (ITS)",
        description: <>Bachelor of Informatics Engineering (Jul 2021 - Sep 2025) with GPA 3.66/4.00. Final thesis on Dynamic Deep Graph Convolutional Network for Personality Classification. Teaching Assistant for Database System, Operating System, and Computer Networks (3 semesters).</>,
      },
      {
        name: "Bangkit Academy by Google, GoTo, Traveloka",
        description: <>Machine Learning Path (Feb 2024 - Jul 2024) with average score of 91.86 (A Grade). Completed Google-backed ML curriculum including TensorFlow specialization and Generative AI.</>,
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work/Project Experience",
    experiences: [
      {
        company: "Sinergi Informatika Semen Indonesia",
        timeframe: "Oct 2025 - Present",
        role: "Developer Intern",
        achievements: [
          <>
            Maintained e-procurement platform for mining company handling purchasing requisitions, vendor tendering, and
            procurement workflows for 15+ internal users and external vendor network
          </>,
          <>
            Debugged and resolved 35+ production issues in legacy Laravel/React codebase using Git workflow, managing merge
            conflicts between fast-moving dev and stable production branches
          </>,
          <>
            Analyzed PostgreSQL database schemas and existing code to understand undocumented system behavior and implement
            accurate fixes
          </>,
          <>
            Extended automated notification system to support multi-stage procurement alerts (requisition approvals, tender deadlines,
            vendor notifications)
          </>,
        ],
        images: [],
      },
      {
        company: "Flexoo Software House",
        timeframe: "Oct 2024 - Jul 2025",
        role: "Backend Developer",
        achievements: [
          <>
            Developed REST API backend for waste bank management system, handling customer waste transactions and deposit
            tracking
          </>,
          <>
            Designed PostgreSQL database schema with data integrity constraints and query optimization for multi-user operations
          </>,
          <>
            Collaborated with frontend team to define and implement API contracts, ensuring seamless integration across 40+ endpoints
          </>,
          <>
            Deployed application to Linux VPS using Docker and Nginx, managing production environments
          </>,
        ],
        images: [],
      },
      {
        company: "AI CV Analyzer",
        timeframe: "Oct 2025",
        role: "Personal Project",
        achievements: [
          <>
            Built resume screening tool that analyzes candidate CVs against job descriptions using LLM-based matching
          </>,
          <>
            Implemented semantic search to identify relevant skills and experience across resume sections
          </>,
          <>
            Developed REST API using Go (Gin framework) with Python service for LLM processing and asynchronous job handling
          </>,
          <>
            Containerized application with Docker for consistent deployment across environments
          </>,
        ],
        images: [],
      },
      {
        company: "WinayaBot - Discord Task Management Bot",
        timeframe: "Aug 2025",
        role: "Personal Project",
        achievements: [
          <>
            Built Discord bot for personal task management with LLM-powered natural language task creation and reminders
          </>,
          <>
            Developed Go backend with MySQL database for persistent todo storage across Discord sessions
          </>,
          <>
            Integrated LLM service to parse conversational task inputs (e.g., "remind me to call mom tomorrow at 3pm")
          </>,
          <>
            Deployed to Linux VPS using Docker
          </>,
        ],
        images: [],
      },
      {
        company: "Hyfish - Bangkit Program Capstone Project",
        timeframe: "Feb 2024 - Jul 2024",
        role: "Machine Learning Developer",
        achievements: [
          <>
            Built toxic comment detection model using RNN (LSTM/GRU) with TensorFlow to enable automated content moderation for
            forum discussions
          </>,
          <>
            Collected and preprocessed text datasets from Kaggle, handling data cleaning and class balancing for binary classification
            task
          </>,
          <>
            Achieved 84% validation accuracy on toxic language detection, contributing 1 of 3 ML models (alongside fish species and
            freshness classifiers)
          </>,
          <>
            Collaborated with mobile and cloud team to integrate model API into Android application
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Golang",
        description: (
          <> </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "PHP Laravel",
        description: (
          <> </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "PHP Laravel",
        description: (
          <> </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

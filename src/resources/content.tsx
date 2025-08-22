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
      I'm Selene, a design engineer at{" "}
      <Logo
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
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
        A recent backend development graduate with a passion for building
        and deploying full-stack web applications. His work spans the Laravel ecosystem
        and Go for microservices, with experience in modern DevOps practices and an interest in machine learning.
      </>
    ),
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sepuluh Nopember Institute of Technology",
        description: <>Studied Informatics Engineering. (3.66/4.00 GPA) </>,
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work/Project Experience",
    experiences: [
      {
        company: "Flexoo Software House",
        timeframe: "2023 - 2024",
        role: "Backend Developer",
        achievements: [
          <>
            Attained "First Layer" developer designation upon recruitment, representing the highest skill classification based on
            comprehensive technical interview assessment
          </>,
          <>
            Architected and implemented over 40 RESTful API endpoints utilizing Laravel framework and MySQL database for
            client project samsulapp.com, a sophisticated multi-role waste management system
          </>,
          <>
            Administered complete end-to-end deployment procedures on Hostinger Virtual Private Server, implementing
            containerization through Docker and configuring Nginx as load balancer for backend worker processes
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Hyfish | Bangkit Capstone Project",
        timeframe: "2024",
        role: "Machine Learning Developer",
        achievements: [
          <>
            Developed sophisticated Natural Language Processing model for detection and filtration of toxic commentary within
            fishing community forums, with objective of establishing healthier online community environment
          </>,
          <>
            Engineered comprehensive data pipeline through sourcing, cleaning, and integration of two distinct text datasets from
            Kaggle platform, creating unified training dataset comprising over 1,500 samples
          </>,
          <>
            Achieved robust model performance with 84% validation accuracy, demonstrating effectiveness in identifying toxic
            language patterns prior to integration into primary application
          </>,
        ],
        images: [],
      },
      {
        company: "WinayaBot | Discord Bot",
        timeframe: "2025",
        role: "Lead Developer",
        achievements: [
          <>
            Designed sophisticated two-service system architecture: Gateway service for processing all incoming commands (ping,
            help, AI summary) and dedicated API service managing all database interactions for task management functionality
          </>,
          <>
            Implemented comprehensive feature set including collaborative To-Do list management system and AI-powered text
            summarization capable of condensing extensive text content or website materials
          </>,
          <>
            Utilized contemporary technology stack including Go for backend logic implementation, MySQL for data persistence,
            REST API for inter-service communication, and Docker for deployment on private Virtual Private Server
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

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning & AI Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Information Technology Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning & AI Intern",
    company_name: "iTech Group",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Led development of neural network classification model using PyTorch and Scikit-learn to predict system anomalies, resulting in 10% improvement in threat detection accuracy and reducing false positives by 15%",
      "Optimized deep learning algorithms for image recognition tasks, improving model accuracy by 8% and reducing training time by 20% through implementation of transfer learning with TensorFlow and Keras.",
    ],
  },


  {
    title: "Tutor",
    company_name: "Shane Academy",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "",
      "",
    ],
  },



  
  {
    title: "Raspberry Pi Team Member",
    company_name: "IEEE McMaster Student Branch",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2024 - Apr 2025",
    points: [
      "",
      "",
    ],
  },







  {
    title: "Open Sources Team Member - ML Track",
    company_name: "Google Developer Student Club",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2023 - May 2024",
    points: [
      "",
      "",
    ],
  },



  {
    title: "Machine Learning Intern",
    company_name: "Data Science Academy",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
      "Applied advanced machine learning algorithms and statistical methods to tackle real-world challenges, leveraging PyTorch, TensorFlow, and Seaborn to develop, optimize, and visualize predictive models with high accuracy.",
      "Analyzed diverse datasets using Python, R, and SPSS, extracting key insights and building statistical models.",
    ],
  },


  {
    title: "Data Science Intern",
    company_name: "QSS Analytics",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "Led the analysis and visualization of large datasets using SPSS, Python, SQL, Power BI and Tableau, driving actionable insights for customers and optimizing decision-making processes.",
      "Produced over 10 detailed visualizations and reports using Pandas, NumPy, Scikit-learn, and TensorFlow, significantly enhancing team productivity by 15%.",
    ],
  },



  {
    title: "IT Support Specialist",
    company_name: "Shane Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Resolved over 200 complex technical issues, ensuring a 99% satisfaction rate among students and staff while maintaining seamless operations for 50+ devices, including classroom equipment and printers.",
      "Spearheaded cross-functional collaboration, optimizing IT workflows and increasing operational efficiency by 15%.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      " ",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      " ",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " ",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

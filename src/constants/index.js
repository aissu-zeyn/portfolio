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
  shane,
  ieee,
  gdsc,
  dsa,
  qss,
  ibm,
  kpmg,
  staysame,
  automl,
  farminglife,
  picker,
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
    title: "AI Builder Intern",
    company_name: "KPMG",
    icon: kpmg,
    iconBg: "#FFFFFF",
    date: "Jan 2027 - Apr 2027",
    points: [],
  },
  {
    title: "Operations Lead",
    company_name: "Google Developer Group",
    icon: gdsc,
    iconBg: "#FFFFFF",
    date: "May 2026 - Present",
    points: [
      "Organize and run the Mac-a-thon hackathon end to end, coordinating logistics, schedule, venue, participants, and volunteers.",
      "Lead sponsorship outreach, pitching partners and securing funding and prizes to support club events.",
      "Communicate with vendors and partners to arrange food, swag, and event supplies within budget.",
      "Coordinate the operations team and delegate tasks to keep events and workshops running smoothly.",
    ],
  },
  {
    title: "AI Engineering Intern",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#FFFFFF",
    date: "Sep 2025 - Aug 2026",
    points: [
      "Eliminated 7 hours/month of manual report compilation for IBM leadership across 8 project teams by designing a Python-based intelligent automation \"uber board\" that consolidates 10+ boards into one, leveraging watsonx.ai, Gemini, Llama, and IBM Bob to aggregate Monday.com and Slack data into leadership-ready reports.",
      "Accelerated the seller reference approval process by 35% by architecting an NLP-driven evaluation platform in Python and React, combining automated content generation, an LLM-as-judge scoring pipeline, action-item extraction, and workflow orchestration via the Monday.com and Slack APIs.",
      "Prepared over 100 product managers and sellers for client-facing AI product demos by developing technical lab guides, workshop materials, and live demonstrations across multiple IBM AI offerings.",
    ],
  },
  {
    title: "Tutor",
    company_name: "Shane Academy",
    icon: shane,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2025",
    points: [],
  },
  {
    title: "Raspberry Pi Team Member",
    company_name: "IEEE McMaster Student Branch",
    icon: ieee,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Apr 2025",
    points: [],
  },
  {
    title: "Open Sources Team Member - ML Track",
    company_name: "Google Developer Student Club",
    icon: gdsc,
    iconBg: "#FFFFFF",
    date: "Sep 2023 - May 2024",
    points: [
      "Contributed to the development of an AutoML system for custom classification tasks, automating model training and selection to make machine learning accessible to non-experts, using Google Cloud Platform and Python.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "QSS Analytics & Data Science Academy",
    icon: qss,
    iconBg: "#000000",
    date: "Feb 2023 - Aug 2023",
    points: [
      "Improved time-to-insight across analytics deliverables by 15% for 3 adopting teams by applying predictive analytics and statistical modeling to large datasets in Python, R, SQL, SPSS, Power BI, and Tableau.",
      "Built and optimized supervised learning models for bank credit approval and fraud detection using PyTorch, TensorFlow, and Scikit-learn, improving predictive performance over the team's baseline approach.",
      "Delivered 10+ predictive dashboards and analytical reports adopted by 3 teams, using Pandas, NumPy, Seaborn, and TensorFlow.",
    ],
  },
  {
    title: "IT Support Specialist",
    company_name: "Shane Academy",
    icon: shane,
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Resolved over 200 complex technical issues, ensuring a 99% satisfaction rate among students and staff while maintaining seamless operations for 50+ devices, including classroom equipment and printers.",
      "Spearheaded cross-functional collaboration, optimizing IT workflows and increasing operational efficiency by 15%.",
    ],
  },
];

const projects = [
  {
    name: "Stay Same",
    description:
      "AI travel itinerary planner built at a hackathon, with AI-generated itineraries, image-to-destination matching, and a solo traveler connector.",
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
        name: "claude-api",
        color: "pink-text-gradient",
      },
      {
        name: "elevenlabs",
        color: "orange-text-gradient",
      },
    ],
    image: staysame,
    source_code_link: "https://github.com/aissu-zeyn",
  },
  {
    name: "AutoML",
    description:
      "AutoML system for custom classification tasks that automates model training and selection, making machine learning accessible to non-experts through an intuitive interface. Built with Google Developer Student Club.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gcp",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
    ],
    image: automl,
    source_code_link: "https://github.com/aissu-zeyn",
  },
  {
    name: "Farming Life",
    description:
      "Interactive game for Parkinson's detection using ELM, designed for elderly users, with engaging sub-games that assess cognitive and motor skills and clear instructions for accessibility.",
    tags: [
      {
        name: "elm",
        color: "blue-text-gradient",
      },
      {
        name: "game",
        color: "green-text-gradient",
      },
      {
        name: "accessibility",
        color: "pink-text-gradient",
      },
    ],
    image: farminglife,
    source_code_link: "https://github.com/aissu-zeyn",
  },
  {
    name: "Picker App",
    description:
      "Web app for making random decisions: list picking, wheel spinning, dice rolling, coin flipping, and number generation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: picker,
    source_code_link: "https://github.com/aissu-zeyn",
  },
];

export { services, technologies, experiences, projects };

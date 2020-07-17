import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'EJM | Portfolio',
  lang: 'en, es, fr, jp', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio',
};

// HERO DATA
export const heroData = {
  title: "Hello there ✌🏼, I'm ",
  name: 'Edmond',
  subtitle: 'A ',
  cta: 'About Me',
  logo: '../images/logo.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hello there! My name is Edmond, a Front-End Web Developer based in New York. On the Winter of 2018, I fell in love with the capabilities of web development after learning from various resources such as FreeCodeCamp and YouTube. Since then I've been on the path of a self-taught developer striving to always improve by repeatedly grinding out code every day.",
  paragraphTwo:
    'I currently have 2 years of experience in HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, and Gatsby. I also have competent knowledge and experience in server-side technologies such as Node.js, Express, MongoDB, MySQL, GraphQL, and Python.',
  paragraphThree:
    'Other than web development, I have passions for VR/AR development, mobile app development, cooking, traveling, health & fitness, e-commerce, financial investments, and the most passionate of all, doggos 🐶.',
  resume: 'https://edjunma.github.io/EJM-Resume/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project-1-ecommerce.jpg',
    title: 'CRWN-Clothing',
    info:
      'E-commerce web application made with React, Redux, Stripe, Firebase, ContextAPI, and React Hooks. Consists of routes to different clothing categories, add/delete cart function, checkout with Stripe payment, sign-in/sign-out users, and a register user feature.',
    info2: '',
    url: 'https://ejm-crwn.herokuapp.com/',
    repo: 'https://github.com/edjunma/crwn-clothing',
  },
  {
    id: uuidv1(),
    img: 'project-2-face-recognition.jpg',
    title: 'Face Recognition App',
    info:
      "Full-Stack web application built using HTML5, CSS3, JavaScript, and React, for the front-end with the Clarifai API to detect faces from the user's image URL inputs which then calls to the back-end API created with Node.js, Express.js, and PostgreSQL database to record user entries and log user accounts.",
    info2: '',
    url: 'https://smart-brain-v2.herokuapp.com/',
    repo: 'https://github.com/edjunma/face-recognition-v2',
  },
  {
    id: uuidv1(),
    img: 'project-3-apex-legends-tracker.jpg',
    title: 'Apex Legends Stats Tracker',
    info:
      'Full-Stack web application built using VueJS and Express utilizing the Tracker Network API from tracker.gg to track and display player stats from their respective platforms.',
    info2: '',
    url: 'https://apex-legends-tracker.herokuapp.com/',
    repo: 'https://github.com/edjunma/apex-legends-tracker',
  },
  {
    id: uuidv1(),
    img: 'project-4-apple-mock.jpg',
    title: 'Mock Apple Website',
    info:
      'Mock Apple Website design and code practice utilizing Bootstrap Studio as the framework for this project. Mock website was created with nav, grid, column, and image components for a responsive design.',
    info2: '',
    url: 'https://ejm-apple-mock.bss.design/',
    repo: 'https://github.com/edjunma/Apple-Mock-Landing',
  },
  {
    id: uuidv1(),
    img: 'project-5-react-real-estate.jpg',
    title: 'React Real-Estate App',
    info:
      'Real Estate Application made with React. MVP functionality with sorted filters for the real-estate listing data, different view functionality for listings with grid system, and page pagination.',
    info2: '',
    url: 'https://ejm-react-real-estate.herokuapp.com/',
    repo: 'https://github.com/edjunma/react-real-estate-app',
  },
  {
    id: uuidv1(),
    img: 'project-6-gatsby-blog.jpg',
    title: 'GatsbyJS Blog',
    info:
      'Functioning blog website developed with GatsbyJS and React for the UI and front-end. As part of GatsbyJS, GraphQL was used to fetch markdown files, blog posts, APIs, and plugins used for the blog website.',
    info2: '',
    url: 'https://ejm-gatsby-dev-blog.netlify.com/',
    repo: 'https://github.com/edjunma/gatsby-blog-v2',
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    'Please feel free to send me an email or connect with me on my social media links below. I will get back to you as soon as possible with some 🍵 and 🍪.',
  btn: "Let's Talk Business! 🤝🏼",
  email: 'edjunma@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      title: 'LinkedIn',
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/edjunma/',
    },
    {
      id: uuidv1(),
      title: 'GitHub',
      name: 'github',
      url: 'https://github.com/edjunma',
    },
    {
      id: uuidv1(),
      title: 'Twitter',
      name: 'twitter',
      url: 'https://twitter.com/edjunma',
    },
    {
      id: uuidv1(),
      title: 'Instagram',
      name: 'instagram',
      url: 'https://www.instagram.com/edjunma/',
    },
    {
      id: uuidv1(),
      title: 'CodePen',
      name: 'codepen',
      url: 'https://codepen.io/edjunma/',
    },
    {
      id: uuidv1(),
      title: 'FreeCodeCamp',
      name: 'free-code-camp',
      url: 'https://www.freecodecamp.org/edjunma',
    },
    {
      id: uuidv1(),
      title: 'Dev.to',
      name: 'dev',
      url: 'https://dev.to/edjunma',
    },
  ],
};

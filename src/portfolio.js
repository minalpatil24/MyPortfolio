const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/minalpatil24',
  title: 'MP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Minal Patil',
  role: 'Full Stack Developer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    `Hi! I’m Minal Patil, a passionate Full-Stack Developer with expertise in building responsive, user-friendly web applications. I specialize in React, Node.js, Express, MongoDB, and MySQL, combining front-end and back-end skills to create seamless, scalable, and efficient web experiences.

I love turning ideas into real products, creating interactive tools and applications that people enjoy using. I’m always learning the latest technologies and frameworks to stay ahead in the rapidly evolving world of web development.

Let’s build something amazing together! `,
  // resume: 'MinalPatilresume.pdf',
resume: `${process.env.PUBLIC_URL}/MinalPatilresume.pdf`,

  social: {
    linkedin: 'https://linkedin.com',
    github: `https://github.com/minalpatil24`,
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Airbnb Clone',
    description:
      'A MERN stack project mimicking Airbnb functionality.',
    stack: [`React`, `Node.js`, `MongoDB`, `CSS`],
    sourceCode: 'https://github.com/minalpatil24/MajorProject/tree/main',
    livePreview: 'https://majorproject-pxqz.onrender.com',
    image: '',
  },
  {
    name: 'Simon Says',
    description: 'A fun, interactive memory game where players repeat sequences of colors and sounds, testing their memory and reflexes.',
    stack: [`React`, `Vite`, `CSS`, `JavaScript`],
    sourceCode: `https://github.com/minalpatil24/Simon-says-game`,
    livePreview: `https://mpsimonsaysgame.netlify.app/
`,
    image: ``,
  },
  {
    name: 'Weather App',
    description:
      `A responsive web application that allows users to search for any city and get real-time weather information, including temperature, humidity, wind speed, and a short forecast. Built to provide a clean and interactive user experience.`,
    stack: [`React`, `Vite`, `CSS`, `OpenWeather API`],
    sourceCode: `https://github.com/minalpatil24/mini-project-react`,
    livePreview: `https://minalpatilweatherapp.netlify.app/`,
  },

]

// const skills = [
// skills can be added or removed
// if there are no skills, Skills section won't show up
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'React',
//   'Redux',
//   'SASS',
//   'Material UI',
//   'Git',
//   'CI/CD',
//   'Jest',
//   'Enzyme',
// ]

const skills = [
  {
    category: "Front-End",
    items: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS"]
  },
  {
    category: "Back-End",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "VS Code", "Postman", "Vercel", "Netlify"]
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Debugging", "Quick Learner", "Collaboration"]
  }
];




const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'minalpatilwork@gmail.com',
}

export { header, about, projects, skills, contact }

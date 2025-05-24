/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dali Bouali",
  title: "Hi all, I'm Mohamed Ali",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Java / Spring / SpringBoot /Angular and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dalibouali/",
  linkedin: "https://www.linkedin.com/in/mohamed-ali-bouali/",
  gmail: "boualimohamed77@gmail.com",
  gitlab: "https://gitlab.com/dalibouali",
  facebook: "https://www.facebook.com/mohamed.bouali.7545",

  stackoverflow: "https://stackoverflow.com/users/22437515/mohamed-ali-bouali",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Experienced full-stack developer proficient in Spring Boot and Angular "
    ),
    emoji(
      "⚡ Specializing in backend development to deliver robust and maintainable websites, with a keen eye for crafting dynamic front-end interfaces for web and mobile applications. "
    ),

    emoji(
      "⚡ Expertise in building Progressive Web Applications (PWAs) and Single Page Applications (SPAs) across diverse technology stacks."
    ),
    emoji(
      "⚡ Working towards mastering the integration of third-party services like Firebase, AWS"
    ),
    emoji(
      "⚡ Supported by a strong foundation in Docker,Jenkins and a commitment to continuous learning and adopting new technologies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {skillName: "java ", fontAwesomeClassname: "fab fa-java"},
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "No-sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tek-Up University",
      logo: require("./assets/images/tekup.png"),
      subHeader: "Engineering degree in Computer Science",
      duration: "September 2020 - September 2023",
      desc: " completed three years of the engineering cycle with consistent success",
      descBullets: [
        "First year: Dedicated to acquiring a foundational understanding of the field.",
        "Two years: Specialized study in software engineering."
      ]
    },
    {
      schoolName: "Faculty of Science Tunisia",
      logo: require("./assets/images/fst.jpg"),
      subHeader: "Preparatory cycle in maths and physics",
      duration: "September 2018 - July 2020",
      desc: "Admitted to the national entrance exam for engineering schools.",
      descBullets: ["Strong education foundation", "Career goals clarified"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "SaaD",
      companylogo: require("./assets/images/saad.png"),
      date: "Februray 2023 – July 2023",
      desc: "End of Study Graduation Project : Design and Development of a web-based tax declaration application.",
      descBullets: [
        "Digitalization of the declaration process for accountants.",
        " Technologies used: Spring Boot, Angular, Docker, RabbitMQ, WebSocket"
      ]
    },

    {
      role: "Software Engineer Intern",
      company: "Rhis Software",
      companylogo: require("./assets/images/rhis.jpg"),
      date: "juin 2022 – August 2022",
      desc: "Summer internship : providing single sign on solution for a web based application",
      descBullets: [
        "Implement a user-friendly login mechanism to enhance the security of a web application..",
        " Technologies used: Spring Boot, Angular, Keycloak"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Acdemic projects and End of Study graduatio project",
  projects: [
    {
      image: require("./assets/images/impotenligne.png"),
      projectName: "ImpotEnLigne",
      projectDesc:
        "Web application for the digitalization of the tax return process.",
      footerLink: [
        {
          name: "See Demo",
          url: "https://drive.google.com/file/d/1xyc8O1kTvPZ5T0JbV2Td5XQN7_w3d7Yj/view?usp=drive_link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/stagi.png"),
      projectName: "Stagi",
      projectDesc:
        "Stagi is a platform where students can find internships opportunities",
      footerLink: [
        {
          name: "See Demo",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Java 8 Associate OCA",
      subtitle:
        "Second certification in an object oriented programming language.",
      image: require("./assets/images/java.png"),
      imageAlt: "Java 8 Associate OCA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=AFA94075545F831F1A8A64906A99A813D776EF74786D061302C0F249D66621CB"
        }
      ]
    },
    {
      title: "Python Associate PCAP",
      subtitle:
        "Passing Python PCAP certification as a very first iT certification .",
      image: require("./assets/images/python.png"),
      imageAlt: "Python PCAP certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1HvPid_28gOnSyndRIBpQGktaXRrCBJyQ/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out if you want to discuss a project or simply want to say hello. My inbox is open for everyone!",
  number: " + 42 160 8367914",
  email_address: "boualimohamed77@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

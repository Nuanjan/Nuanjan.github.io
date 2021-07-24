import patriotsImg from "./../../images/patriots.png";
import activityHubImg from "./../../images/activity-hub.png";
import riceNFireImg from "./../../images/rice-n-fire.png";
import todaList from "./../../images/to-do-list.png";

export const projectData = [
  {
    projectName: "Rice N Fire",
    imgUrl: riceNFireImg,
    technologies: "React, Bootstrap, MUI, firebase.",
    detail:
      "Indigo Award Winner 2021 in Restaurant/Cafe category as well as Mobile Responsive category. Worked across with marketing, design and developer team. Worked with agile principle to developed the project.",
    appLink: "https://ricenfire.com/",
    ghbackEndLink: "",
    ghFrontendLink: "",
  },
  {
    projectName: "Patriot",
    imgUrl: patriotsImg,
    technologies: "React, Firebase, MUI, React-reveal",
    detail:
      "Cloned project from React practice course,Udemy course. This application is to show the Football match and Patriots players." +
      "  My husband is an admin, but unaothorized users still can see the landing page.",
    appLink: "https://patriot-827d1.web.app/",
    ghFrontEndLink: "https://github.com/Nuanjan/patriots",
    ghBackEndLink: "",
  },
  {
    projectName: "ActivityHub",
    imgUrl: activityHubImg,
    technologies: "React, Firebase, Twilio API",
    detail:
      "ActivityHub is a General Assemly holiday Hackathon project. Client can connect with people who like the same activity during pandemic by create the meet up room base on activity categories",
    appLink: "https://video-activity-hub.herokuapp.com/",
    ghFrontEndLink: "https://github.com/ActivityHub/video-activity-hub",
    ghBackEndLink: "",
  },
  {
    projectName: "To Do List",
    imgUrl: todaList,
    technologies: "React, TypeScript",
    detail:
      "The purpose of this project is to practice my TypeScript, Client can add, edit and delete the list.",
    appLink: "https://nuanjan.github.io/to-do-app/",
    ghFrontEndLink: "https://github.com/Nuanjan/to-do-app",
    ghBackEndLink: "",
  },
];

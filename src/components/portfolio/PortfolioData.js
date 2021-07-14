import PostMeImg from "./../../images/post-me.png";
import GroceryHelperImg from "./../../images/grocery-helper.png";
import ActivityHubImg from "./../../images/activity-hub.png";
import RiceNFireImg from "./../../images/rice-n-fire.png";

export const PortfolioData = [
  {
    projectName: "Post Me",
    imgUrl: PostMeImg,
    technologies:
      "React, HTML,CSS, Atom, Bootstrap, S3, Express.js, Axios, Node.js, MongoDB.",
    detail:
      "A capstone single page web application project. User can create update or delete the post or comment on someone post. Authentication is required",
    appLink: "https://nuanjan.github.io/post-me-client/#/",
    ghFrontEndLink: "https://github.com/Nuanjan/post-me-client",
    ghBackEndLink: "https://github.com/Nuanjan/post-me-api",
  },
  {
    projectName: "Grocery Helper",
    imgUrl: GroceryHelperImg,
    technologies:
      "jQuery, Handlebars, HTML, CSS, Atom, Bootstrap, Express.js, Ajex, Node.js, MongoDB.",
    detail:
      "Client can create, updates, view and delete the grocery list. Authentication is required to use the app.",
    appLink: "https://nuanjan.github.io/grocery-helper-client/",
    ghFrontEndLink: "https://github.com/Nuanjan/grocery-helper-client",
    ghBackEndLink: "https://github.com/Nuanjan/grocery-helper-api",
  },
  {
    projectName: "ActivityHub",
    imgUrl: ActivityHubImg,
    technologies: "React, Firebase, Twilio API",
    detail:
      "ActivityHub is a General Assemly holiday Hackathon project. The purpose of this application is to connect people who missed the activity that they can join before the pandemic. This application was developed in a short amount of time, but it will help people connect together again!",
    appLink: "https://video-activity-hub.herokuapp.com/",
    ghFrontEndLink: "https://github.com/ActivityHub/video-activity-hub",
    ghBackEndLink: "",
  },
  {
    projectName: "Rice N Fire",
    imgUrl: RiceNFireImg,
    technologies: "React, Bootstrap, MUI, firebase.",
    detail:
      "Indigo Award Winner 2021 in Restaurant/Cafe category as well as Mobile Responsive category. Worked across with marketing, design and developer team. Worked with agile principle to developed the project.",
    appLink: "https://ricenfire.com/",
    ghbackEndLink: "",
    ghFrontendLink: "",
  },
];

import { nanoid } from "nanoid";
import {
  Web,
  ShowChart,
  AllInclusive,
  ChangeHistory,
  Casino,
  AccountTree,
} from "@material-ui/icons/"; //TODO: lets not import icons here

export const helloData = {
  title: "",
  name: "Joseph Stout",
  profilePic: "actual_me.png",
  description:
    "My name is Joseph Stout. I am currently a sophomore at The Pennsylvania State University pursing a degree in Computational Data Sciences. I love technology, movies, economics and politics.",
  GithubLink: "https://github.com/joowy",
  LinkedIn: "https://www.linkedin.com/in/joseph-stout-a30729200/",
  TwitterLink: "https://twitter.com/Joowyee",
  EmailMe: "mailto:jstout1565@gmail.com",
};

export const whatICanDoData = {
  catagories: [
    // {
    //   id: nanoid(),
    //   icon: AllInclusive,
    //   title: "Programming",
    //   description: "",
    // },
    {
      id: nanoid(),
      icon: ShowChart,
      title: "Data Analysis",
      description:
        "In my STAT 184, STAT 380, and STAT 414 classes at Penn State, I have learned statistical techniques and methods to collect and analyze data.",
    },
    {
      id: nanoid(),
      icon: Web,
      title: "Web Development",
      description:
        "I have experience building websites with high performance and maintainability.",
    },
  ],
};

export const projectsData = {
  projectsList: [
    {
      id: nanoid(),
      name: "Dungeon Generator Rouge Like Game",
      date: "10/16/2020 ~ 12/7/2020",
      link: "https://github.com/joowy/BSP-Dungeon-Generator",
      detail: [
        "A rogue like game using binary space partitioning to generate maps. Built for CMPSC 221 project.",
        "Used AWT to draw the UI and Swing the render the game",
        "Implemented A star algorithm for monsters to find the player.",
      ],
      imageFileName: "rouge_like_game.png",
      icon: AccountTree,
      tags: ["Java", "AWT", "Swing"],
    },
    {
      id: nanoid(),
      name: "3D Dice Roller",
      date: "7/19/2020",
      link: "https://github.com/joowy/dice-cannonjs-threejs-react",
      detail: [
        "A physics based 3D dice roller. Built using threejs, cannonjs and react.",
      ],
      imageFileName: "dice_app_cap.png",
      icon: Casino,
      tags: ["Javascript", "React", "cannonjs", "threejs"],
    },
    {
      id: nanoid(),
      name: "Triangle Calculator",
      date: "5/29/2019 ~ 6/9/2020",
      link: "https://github.com/joowy/react-triangle-calculator",
      detail: [
        "Triangle calculator",
        "Uses trigonometry to calculate sides and angles.",
        "This project was originally built with python and PyQt5. I wanted to learn javascript, so I recreated the python project. At first attempted using vanilla javascript.",
        "Vanilla javascript version was terrible so I learned react to rewrite it again.",
      ],
      imageFileName: "triangle_calc.png",
      icon: ChangeHistory,
      tags: ["Javascript", "React"],
    },
  ],
};
export const skillsData = {
  catagories: [
    {
      id: nanoid(),
      name: "Languages",
      techs: [
        { id: nanoid(2), name: "Python", level: 4 },
        { id: nanoid(2), name: "Java", level: 2.5 },
        { id: nanoid(2), name: "Dart", level: 2 },
        { id: nanoid(2), name: "C/C++", level: 1 },
        { id: nanoid(2), name: "Javascript", level: 2.9 },
        { id: nanoid(2), name: "R", level: 2 },
        { id: nanoid(2), name: "SQL", level: 3.1 },
      ],
    },
    {
      id: nanoid(),
      name: "Technologies",
      techs: [
        { id: nanoid(2), name: "React", level: 3.5 },
        { id: nanoid(2), name: "GraphQL", level: 1 },
        { id: nanoid(2), name: "Flutter", level: 2.5 },
        { id: nanoid(2), name: "Firebase", level: 2 },
        { id: nanoid(2), name: "MySQL", level: 4 },
      ],
    },
    {
      id: nanoid(),
      name: "Other Tools",
      techs: [
        { id: nanoid(2), name: "Git", level: 2 },
        { id: nanoid(2), name: "Git Bash", level: 1 },
        { id: nanoid(2), name: "Github", level: 3.5 },
        { id: nanoid(2), name: "VScode", level: 4.5 },
        { id: nanoid(2), name: "RStudio", level: 2 },
        { id: nanoid(2), name: "PowerShell", level: 2.5 },
      ],
    },
  ],
};

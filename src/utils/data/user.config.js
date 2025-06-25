import ResumePDF from "./cv_ver1.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import KloudGin from ".././../assets/images/data/KloudGin.png";
import Freelance from ".././../assets/images/data/Freelance.png";

const user = {
  firstName: "Ahmed",
  lastName: "Al-regas",
  userImage: default_avatar,
  resume: ResumePDF,
  email: "ahmedzizz703@gmail.com",
  linkedIn: "in/ahmed-alrages-810778344",
  gitHub: "ahmedaziz703",
  twitter: "ahmedaziz703",
  aboutMe: {
    intro: " I'm a Full Stack Software Development Engineer from Poland.",
    description:
      "I enjoy taking up complex problems and converting to an usable format. My major domains are Web Development (React / Angular) and Software Development (Java / Python).",
    outro:
      "When I'm not developing any stuff , you will find me re-watching an episode of The Office or exploring a new place.",
  },
  experiences: [
    {
      organization: "-",
      organizationPicture: KloudGin,
      isCurrent: true,
      startDate: "Jun 2019",
      endDate: null,
      positions: [
        {
          positionName: "-",
          startDate: "-",
          endDate: " -",
          isPresent: true,
          description: "-",
        },
        {
          positionName: "--",
          startDate: "--",
          endDate: "--",
          isPresent: false,
          description: "--",
        },
        {
          positionName: "---",
          startDate: "---",
          endDate: "---",
          isPresent: false,
          description: "---",
        },
      ],
    },
    {
      organization: "Freelance Developer",
      startDate: "2017",
      endDate: "2019",
      organizationPicture: Freelance,
      isCurrent: false,
      positions: [
        {
          positionName: "-",
          startDate: "-",
          endDate: "-",
          isPresent: false,
          description: "-",
        },
      ],
    },
  ],
  education: [
    {
      instituteName: "-",
      degree: "-",
      year: "-",
      id: 1,
    },
    {
      instituteName: "--",
      degree: "--",
      year: "--",
      id: 2,
    },
    {
      instituteName: "--",
      degree: "--",
      year: "--",
      id: 3,
    },
  ],
  projects: [
    {
      projectName: "Note",
      description: "-",
      madeWith: ["-", "--", "---", "----"],
      link: "https://github.com/ahmedaziz703",
    },
    {
      projectName: "Bus Management",
      description: "-",
      madeWith: ["-", "--", "---"],
      link: "https://github.com/ahmedaziz703",
    },
    {
      projectName: "Seat Swapper",
      description: "-",
      madeWith: ["Java", "MySQL", "BlockChain", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/ahmedaziz703",
    },
    {
      projectName: "Flight Ticket Saver",
      description: "-",
      madeWith: ["Python", "DJANGO", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/ahmedaziz703",
    },
  ],
  skills: [
    {
      name: "Language Proficiency",
      values: [
        "Python",
        "Java",
        "JavaScript",
        "ReactJS",
        "Firebase",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "Tools Proficiency",
      values: ["Git", "PyCharm", "Eclipse", "IntelliJ IDEA", "Postman"],
    },
    {
      name: "Database Proficiency",
      values: ["MySQL", "MongoDB", "Firestore"],
    },
  ],
};

export default user;

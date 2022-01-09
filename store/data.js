import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export const myself = {
  profileImage: "/cv-1.jpg",
  profileName: "Mazharul Islam Nahid",
  desgignation: "Frontend Developer",
  aboutMe:
    "Web Developer specialized in front end development. I am interested in learning new technologies and gaining skills to add value to myself and my company",
};
export const contactInformation = [
  {
    id: "mail",
    icon: <FiMail />,
    url: "mailto:nahid.dev19@gmail.com",
    label: "nahid.dev19@gmail.com",
    priority: true,
  },
  {
    id: "phone",
    icon: <FiPhone />,
    url: "01621876123",
    label: "01621876123",
    priority: true,
  },
  {
    id: "wp",
    icon: <FaWhatsapp />,
    url: "01621876123",
    label: "01621876123",
    priority: false,
  },
  {
    id: "fb",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/profile.php?id=100025300822373",
    label: "facebook/nahid.me",
    priority: false,
  },
  {
    id: "ld",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/nahid-islam-1aaa6814b",
    label: "linkedin/nahid.me",
    priority: true,
  },
  {
    id: "github",
    icon: <FaGithub />,
    url: "https://github.com/nahidnstu12",
    label: "github/nahidnstu12",
    priority: true,
  },
  {
    id: "gitLab",
    icon: <FaGitlab />,
    url: "https://gitlab.com/nahidcste12",
    label: "gitlab/nahidcste12",
    priority: true,
  },
  {
    id: "location",
    icon: <GoLocation />,
    url: "Noakhali",
    label: "Noakhali",
    priority: true,
  },
];
export const skillsInfo = [
  { title: "Javascript", progress: "50%" },
  { title: "Nextjs", progress: "50%" },
  { title: "Reactjs", progress: "70%" },
  { title: "Redux", progress: "60%" },
  { title: "Sass", progress: "80%" },
  { title: "Material ui", progress: "50%" },
  { title: "Tailwind css", progress: "40%" },
];
export const familiarSkill = [
  { title: "PHP", progress: "80%" },
  { title: "Typescript", progress: "30%" },
  { title: "Laravel Rest Api", progress: "40%" },
  { title: "Mysql", progress: "50%" },
  { title: "Bootstrap", progress: "80%" },
];

export const languageLists = [
  {
    title: "Bangla",
    note: "Professional Working Proficiency",
  },
  {
    title: "English",
    note: "Full Professional Proficiency",
  },
];

export const refencee = [
  {
    id: 1,
    name: "Michael Bowen",
    desgignation: "Product Manager",
    phone: "07661892982",
    email: "loremipsum@gmail.com",
  },
  {
    id: 2,
    name: "Joseph Kumar",
    desgignation: "Senior Developer",
    phone: "07661892982",
    email: "loremipsum@gmail.com",
  },
  {
    id: 3,
    name: "Rick Ross",
    desgignation: "Product Manager",
    phone: "07661892982",
    email: "loremipsum@gmail.com",
  },
];

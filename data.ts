import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { Education, ExperiencePro, IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import TypeScriptSvg from "./public/svg/TypeScriptSvg";
import JavaScriptSvg from "./public/svg/JavaScriptSvg";
import ReactSvg from "./public/svg/ReactSvg";
import RailsSvg from "./public/svg/RailsSvg";
import PostGreScg from "./public/svg/PostGreSvg";
import CssSvg from "./public/svg/CssSvg";
import FigmaSvg from "./public/svg/FigmaSvg";
import FirebaseSVG from "./public/svg/FirebaseSVG";
import NpmSvg from "./public/svg/NpmSvg";
import LinuxSvg from "./public/svg/LinuxSvg";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Je peux créer des SPA évolutives en utilisant  <b> HTML</b>,<b>CSS</b>   et <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Gérer de la base de données et le serveur,  <b>Ruby On Rails</b> & <b>PostgreSQL</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Je peux développer une REST  API robuste en utilisant <b>Rails for API-only Applications</b> ou <b>Node API</b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: TypeScriptSvg,
    name: "TypeScript",
    url: "45",
  },
  {
    Icon: JavaScriptSvg,
    name: "JavaScript",
    url: "60",
  },
  {
    Icon: ReactSvg,
    name: "React",
    url: "80",
  },
  {
    Icon: RailsSvg,
    name: "Rails",
    url: "70",
  },
  {
    Icon: PostGreScg,
    name: "PostGre",
    url: "80",
  },
  {
    Icon: CssSvg,
    name: "Css",
    url: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: FigmaSvg,
    name: "Figma",
    url: "85",
  },
  {
    Icon: FirebaseSVG,
    name: "Firebase",
    url: "45",
  },
  {
    Icon: NpmSvg,
    name: "Npm",
    url: "60",
  },
  {
    Icon: LinuxSvg,
    name: "Linux",
    url: "45",
  },
];

export const projects: IProject[] = [
  {
    id: 0,
    name: "Muse My Selfs",
    image_path: "/images/muse_my_self.jpg",
    deployed_url: "http://www.musemyself.fr/",
    github_url: "https://github.com/Favot/MuseMySelf",
    category: ["rails", "postgreSQL"],
    description:
      "Musemyself propose des parcours culturels faits-maison pour vous permettre de vous immerger complètement dans un voyage thématique, sans la frustration de devoir écumer Google ou Wikipédia pour trouver du contenu culturel de qualité sur les sujets qui vous intéressent. ",
    key_techs: ["Rails", "SQL", "Bootstrap"],
  },
  {
    id: 1,
    name: "Mobidys",
    image_path: "/images/mobidys.png",
    deployed_url: "https://www.mobidys.com/",
    github_url: "",
    category: ["react", "typescript"],
    description:
      "-Création d'une librairie en TypeScript pour activer un ensemble de fonctionnalités sur un epub au format FROG. -Implementation d’une toolbar interactive en React/TypeScript utilisant cette librairie.",
    key_techs: ["Rails", "SQL", "Bootstrap"],
  },
  {
    id: 2,
    name: "Muse My Vinyls",
    description:
      "Creation d'un site de location de Vinyls sur la base de airBnB ",
    image_path: "/images/muse_my_vinyls.png",
    deployed_url: "https://muse-my-vinyls.cleverapps.io/",
    github_url: "https://github.com/Favot/muse-my-vinyls",
    category: ["rails", "postgreSQL"],
    key_techs: ["Rails", "SQL"],
  },
];

export const education: Education[] = [
  {
    id: 0,
    title: "Licence Professionnelle",
    subtitle: "Concepteur-développeur d'applications web",
    year: "2021",
    institute: "Le Wagon",
    city: "Nantes",
  },
  {
    id: 1,
    title: "Bac Professionnel",
    subtitle: "Spécialisation Electricité, Communication et Equipement",
    year: "2011",
    institute: "La Joliverie",
    city: "St Sébastien sur Loire",
  },
];

export const experience_pro: ExperiencePro[] = [
  {
    id: 0,
    title: "Web Développeur Freelance",
    enterprise: "Made In Moon",
    enterprise_type:
      "Société de conception et développement d’applications mobiles",
    date: "depuis Avril  2021 ",
    city: "Nantes",
    country: "France",
  },
  {
    id: 1,
    title: "Marketing Content Manager",
    enterprise: "TEH GROUP - CyberAttack ",
    enterprise_type:
      "Société de marketing externalisé et développement clients",
    date: "Février à Juin 2020",
    city: "Hong Kong",
    country: "Hong Kong",
  },
  {
    id: 2,
    title: "Waiter",
    enterprise: "Dragon-I ",
    enterprise_type: " Fine Dinning / Night Club ",
    date: "Septembre 2019 à  Janvier 2021",
    city: "Hong Kong",
    country: "Hong Kong",
  },
  {
    id: 3,
    title: "Waiter",
    enterprise: "Ichu ",
    enterprise_type: " Fine Dinning / Cocktail Bar",
    date: "Juin 2019 à  Septembre 2021",
    city: "Hong Kong",
    country: "Hong Kong",
  },
  {
    id: 4,
    title: "Forman",
    enterprise: "Pengelly Engineers LTD",
    enterprise_type: "Entreprise d'installation de structures métalliques",
    date: "Mars 2016 à Avril 2019",
    city: "Auckland",
    country: "New Zealand",
  },
  {
    id: 5,
    title: "Electrician",
    enterprise: "CES Caravan Electricial Solutions (Melbourne, Australia)",
    enterprise_type: "Entreprise d'aménagement électrique pour caravanes",
    date: "Janvier à Novembre 2015",
    city: "Melbourne",
    country: "Australia",
  },
  {
    id: 6,
    title: "Dessinateur industiel",
    enterprise: "SDEL  - Vinci SA",
    enterprise_type:
      "Entreprise d'ingénierie et de travaux électriques des bâtiments tertiaires.",
    date: "Janvier à Novembre 2013",
    city: "Nantes",
    country: "France",
  },
  {
    id: 7,
    title: "Electricien",
    enterprise: "West Modulaire",
    enterprise_type: "Amenagement d'installation modulaire",
    date: "Avril à Decembre 2012",
    city: "Puceul",
    country: "France",
  },
];

import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  url: string;
}

export interface Education {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  institute: string;
  city: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface ExperiencePro {
  id: number;
  title: string;
  enterprise: string;
  enterprise_type: string;
  date: string;
  city: string;
  country: string;
}

export type Category =
  | "react"
  | "node"
  | "mongo"
  | "socket"
  | "rails"
  | "postgreSQL"
  | "ml"
  | "vanilla"
  | "typescript";

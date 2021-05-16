import { motion } from "framer-motion";
import { FunctionComponent } from "react";

import { Skill } from "../types";

const SkillCar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, url, name },
}) => {
  return (
    <div className="w-16 h-16 m-6 ">
      <a href={url}>
        <Icon />
      </a>
    </div>
  );
};
export default SkillCar;

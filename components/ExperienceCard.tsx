import { FunctionComponent } from "react";
import { ExperiencePro } from "../types";

const ExperienceCard: FunctionComponent<{ experience: ExperiencePro }> = ({
  experience: { id, title, enterprise, enterprise_type, date, city, country },
}) => {
  return (
    <div className="flex flex-col p-2 space-x-4 ">
      <div className="flex justify-between w-full my-2 align-middle">
        <h5 className="text-lg font-bold ">{title}</h5>
        <p>{date}</p>
      </div>
      <p>
        <span className="font-bold">{enterprise}</span> ({city} , {country})
      </p>
      <p>{enterprise_type}</p>
      <p></p>
    </div>
  );
};

export default ExperienceCard;

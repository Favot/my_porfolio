import { FunctionComponent } from "react";
import { Education } from "../types";

const EducationCard: FunctionComponent<{ education: Education }> = ({
  education: { id, city, institute, title, subtitle, year },
}) => {
  return (
    <div>
      <h5 className="my-2 text-xl font-bold">{title}</h5>
      <p className="font-semibold">
        {institute}, {city} ({year})
      </p>
      <p className="my-3">{subtitle}</p>
      <p></p>
    </div>
  );
};

export default EducationCard;

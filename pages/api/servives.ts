import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  //BY default get request

  //! complex backend logic :(
  res.status(200).json({ services });
};

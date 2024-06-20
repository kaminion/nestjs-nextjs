import { Main } from "@/server/main";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
  return new Promise(async (resolve) => {
    const listener = await Main.getListener();
    listener(req, res);
    res.on("finish", resolve);
  });

}

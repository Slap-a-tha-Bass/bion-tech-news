import { BIO_POSTS, isEmpty, serializeQuery, SUFFIX } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        const query = req.query as unknown as models.IGetPosts;
        let biotechNews = query.s;

        if (isEmpty(biotechNews)) {
          biotechNews = BIO_POSTS;
        }
        delete query.s;

        const response = await fetch(
          `${biotechNews}${serializeQuery(query)}${SUFFIX}`
        );

        const data: models.IRedditResponse = await response.json();

        res.status(200).json(data);
      } catch (error) {
          console.log(error);
          res.status(400);
      }

      break;
    default:
      res.send(404);
      break;
  }
};

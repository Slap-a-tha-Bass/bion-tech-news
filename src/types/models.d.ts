declare module models {
  interface IPaginateReddit {
    after?: string;
    before?: string;
  }
  interface IRedditQueryParams extends IPaginateReddit {
    count?: number;
    limit?: number;
  }
  interface IGetPosts extends IRedditQueryParams {
    s?: string;
  }
  interface INewsPost {
    kind: string;
    data: {
      id: string;
      subreddit: string;
      title: string;
      thumbnail: string;
      permalink: string;
      author: string;
    }
  }
  interface IResponse {
    kind: string;
    data: {
      after: string;
      before: string;
      dist: number;
      children: INewsPost[];
    }
  }
}

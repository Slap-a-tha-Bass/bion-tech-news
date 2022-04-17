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
    };
  }
  interface IRedditResponse {
    kind: string;
    data: {
      after: string;
      before: string;
      dist: number;
      children: INewsPost[];
    };
  }
  interface IApiNewsPost {
    title: string;
    author: string;
    source: {
      id: string;
      name: string;
    };
    url: string;
    urlToImage: string;
  }
  interface INewsApiResponse {
    articles: IApiNewsPost[];
  }
  interface INewsDataPost {
    title: string;
    link: string;
    creator: string | [];
    image_url: string;
    source_id: string;
  }
  interface INewsDataResponse {
    results: INewsDataPost[];
  }
}

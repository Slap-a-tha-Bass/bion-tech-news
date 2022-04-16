export const BASE_URL = "https://reddit.com";
export const SUBREDDIT_URL = `/r/`;
export const BIO_POSTS = `biotechnews`;
export const SUFFIX = ".json";

export const BASE_URL2 = "https://newsapi.org/v2/"
export const EVERYTHING = "everything"
export const BIO_POSTS2 = `?q=biotech`
export const API_KEY = `&apiKey5268b70ac71347e584d205448b042978`;

export function isNil(obj: any): boolean {
  return obj === undefined || obj === null;
}

export function isEmpty(obj: any): boolean {
  return isNil(obj) || obj === "";
}

export function isObject(obj: any): boolean {
  return !isNil(obj) && typeof obj === "object";
}

export function isArray(obj: any): boolean {
  return !isNil(obj) && Array.isArray(obj);
}

export function serializeQuery(query: any): string {
  if (isNil(query)) {
    return "";
  }

  if (isObject(query)) {
    return Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join("&");
  }

  return query;
}
const urlRegex = /(https?:\/\/[^\s]+)/g;

export function getThumbnail(thumbnail: any): string {
  if (isNil(thumbnail) || !urlRegex.test(thumbnail)) {
    return "";
    // TODO add default image
  }

  return thumbnail;
}
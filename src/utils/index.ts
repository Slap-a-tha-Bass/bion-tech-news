export const BASE_URL = "https://reddit.com";
export const SUBREDDIT_URL = `${BASE_URL}/r/`;
export const BIO_POSTS = `${SUBREDDIT_URL}biotech`;
export const SUFFIX = ".json";

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
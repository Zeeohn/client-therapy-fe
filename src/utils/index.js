import { BASE_PATH, PATH_TO_SUBSTRING } from "../constants"

export const generateUrlForMedia = (url) => {
  console.log('url',url)
  return `${BASE_PATH}${url.substring(PATH_TO_SUBSTRING.length)}`
}

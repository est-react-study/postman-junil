const urlRule = /^https?:\/\/([a-zA-Z0-9._-]+\.(.*))$/
export const validateURL = (url: string) => {
  return urlRule.test(url);
}
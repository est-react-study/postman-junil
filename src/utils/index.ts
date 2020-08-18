const urlRule = /^https?:\/\/[a-zA-Z0-9가-힣._-]+\.[a-zA-Z]+$/
export const validateURL = (url: string) => {
  return url.length > 0 && urlRule.test(url);
}
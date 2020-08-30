import { IRequestTable } from "../stores/requestStore";

const urlRule = /^https?:\/\/([a-zA-Z0-9가-힣._-]+\.)?[a-zA-Z0-9]+(:[0-9]{2,5})?/
export const validateURL = (url: string) => {
  return url.length > 0 && urlRule.test(url);
}

export const getQueryParamsOf = (params: IRequestTable[]) => {
  const queryParams = params.filter(({ key, value }) => ![key.trim(), value.trim()].includes(''))
                            .map(({ key, value }) => `${key}=${encodeURIComponent(value)}`).join('&');

  return queryParams.length ? `?${queryParams}` : '';
}

export const getHeadersOf = (headerList: IRequestTable[]): { [k: string]: string } =>
  headerList.filter(({ key, value }) => ![key.trim(), value.trim()].includes('') )
            .reduce((headers, { key, value }) => ({
              ...headers,
              [key]: value
            }), {});

export const dateFormat = (format = 'Y-M-D H:m:s', time: number = Date.now()) => {
  const date = new Date(time);
  return format.replace(/Y|M|D|H|m|s/g, match => {
    if (match === 'Y') return String(date.getFullYear());
    if (match === 'M') return `0${date.getMonth() + 1}`.substr(-2);
    if (match === 'D') return `0${date.getDate()}`.substr(-2);
    if (match === 'H') return `0${date.getDate()}`.substr(-2);
    if (match === 'm') return `0${date.getMinutes()}`.substr(-2);
    if (match === 's') return `0${date.getSeconds()}`.substr(-2);
    return match;
  })
}
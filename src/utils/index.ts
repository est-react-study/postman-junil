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
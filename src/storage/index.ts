const getData = (key: string): any =>
  JSON.parse(localStorage.getItem(key) || 'null');

const setData = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

export {
  getData,
  setData
};
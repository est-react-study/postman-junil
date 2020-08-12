export default Object.freeze({

  getData: (key: string): any =>
    JSON.parse(localStorage.getItem(key) || 'null'),

  setData: (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value))

});
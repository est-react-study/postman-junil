export default Object.freeze({

  get: <T>(key: string): T|null =>
    JSON.parse(localStorage.getItem(key) || 'null'),

  set: <T>(key: string, value: T) =>
    localStorage.setItem(key, JSON.stringify(value))

});
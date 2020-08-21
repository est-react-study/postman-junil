import storage from 'storage';

const STORAGE_KEY: string = 'histories';

export default Object.freeze({

  fetchAll (): string[] {
    return storage.get<string[]>(STORAGE_KEY) || [];
  },

  put (histories: string[]) {
    storage.set<string[]>(STORAGE_KEY, histories);
  },

  push (history: string) {
    const histories: string[] = this.fetchAll();
    histories.push(history);
    this.put(histories);
  },

  remove (index: number) {
    const histories: string[] = this.fetchAll();
    histories.splice(index, 1);
    this.put(histories);
  }

});
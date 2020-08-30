import storage from 'storage';
import { History } from "model/History";

const STORAGE_KEY: string = 'histories';

export default Object.freeze({

  fetchAll (): History[] {
    return storage.get<History[]>(STORAGE_KEY) || [];
  },

  put (histories: History[]) {
    storage.set<History[]>(STORAGE_KEY, histories);
  },

  push (history: History) {
    const histories: History[] = this.fetchAll();
    histories.push({ ...history, createdAt: Date.now() });
    this.put(histories);
  },

  remove (index: number) {
    const histories: History[] = this.fetchAll();
    histories.splice(index, 1);
    this.put(histories);
  }

});
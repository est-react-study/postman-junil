import storage from 'storage';
import { RequestHistory } from "model/RequestHistory";

const STORAGE_KEY: string = 'histories';

export default Object.freeze({

  fetchAll (): RequestHistory[] {
    return storage.get<RequestHistory[]>(STORAGE_KEY) || [];
  },

  put (histories: RequestHistory[]) {
    storage.set<RequestHistory[]>(STORAGE_KEY, histories);
  },

  push (history: RequestHistory) {
    const histories: RequestHistory[] = this.fetchAll();
    histories.push({ ...history, createdAt: Date.now() });
    this.put(histories);
  },

  remove (index: number) {
    const histories: RequestHistory[] = this.fetchAll();
    histories.splice(index, 1);
    this.put(histories);
  }

});
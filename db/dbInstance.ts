import { InMemoryDB } from "./InMemoryDB";

let db: InMemoryDB;

export function getDB() {
  if (!db) db = new InMemoryDB();
  return db;
}

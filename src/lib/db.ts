import fs from 'node:fs';
import path from 'node:path';

const FILE_PATH = path.resolve(process.cwd(), 'data.json');

export function getDB() {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2));
  }
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(data);
}

export function saveDB(data: any) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}
import * as fs from 'fs';
import csv from 'csv-parser';
import {Item} from './interfaceData'


const readCSV = async (filePath: string): Promise<Item[]> => {
  return new Promise((resolve, reject) => {
    const results: Item[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Item) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error: any) => reject(error));
  });
};

export default readCSV;
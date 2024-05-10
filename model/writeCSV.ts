import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import {Item} from '../model/interfaceData'
import * as fs from 'fs'

export const writeCSV = async (filePath: string, data: Item[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      { id: 'peso', title: 'peso' },
      { id: 'valor', title: 'valor'},
      { id: 'quantidade', title: 'quantidade'}
    ],
    append: fs.existsSync(filePath)
  });

  return csvWriter.writeRecords(data);
};
export default writeCSV
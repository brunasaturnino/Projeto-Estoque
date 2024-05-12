import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import {Item} from './interfaceData'
import * as fs from 'fs';

const writeCSV = async (filePath: string, data: Item[]): Promise<void> => {
  
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome',  title: 'nome' },
      { id: 'valor',  title: 'valor' },
      { id: 'peso', title: 'peso' },
      { id: 'quantidade', title: 'quantidade'}
    ],
    append: fs.existsSync(filePath)
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV;
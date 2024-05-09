import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import {Item} from '../model/interfaceData'

export const writeCSV = async (filePath: string, data: Item[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'title', title: 'TÍTULO' },
      { id: 'value', title: 'VALOR' },
    ],
  });

  return csvWriter.writeRecords(data);
};
export default writeCSV
import ExcelJS from 'exceljs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateExcel(customers) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Customer Report');

  sheet.columns = [
    { header: 'Full Name', key: 'full_name', width: 30 },
    { header: 'Country', key: 'country', width: 20 },
    { header: 'Outstanding Balance', key: 'local_balance', width: 20 },
    { header: 'Calculated Monc', key: 'calculated_monc', width: 20 },
  ];

  customers.forEach(row => sheet.addRow(row));

  const filePath = path.join(__dirname, '../../daily_customer_report.xlsx');
  await workbook.xlsx.writeFile(filePath);
  return filePath;
}

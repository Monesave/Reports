import cron from 'node-cron';
import { runDailyReport } from './jobs/dailyReportJob.js';

if (process.argv.includes('--test')) {
  console.log('⏳ Running test job...');
  await runDailyReport();
}

cron.schedule('0 8 * * *', () => {
  console.log('📆 Running scheduled daily report...');
  runDailyReport();
});

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export async function sendEmailWithAttachment(filePath) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Daily Customer Balance Report',
    text: 'Attached is the daily customer balance report.',
    attachments: [{ filename: 'daily_customer_report.xlsx', path: filePath }],
  });

  console.log('✅ Email sent to', process.env.EMAIL_TO);
}

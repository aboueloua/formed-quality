import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;



export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.GMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })
  console.log(email, subject);
  try {
    await transporter.sendMail({
      from: fromEmail, // sender address
      to: [email, fromEmail, 'contact@formedquality.com'], // list of receivers
      subject: subject, // Subject line
      text: JSON.stringify(message), // plain text body
      html: message,
    });
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}



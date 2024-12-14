import nodemailer from 'nodemailer'

const email = process.env.EMAIL_USER
const password = process.env.EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
  service:"Gmail",
  auth:{
    user:email,
    pass:password
  }
})

export const mailOptions = {
  from: email,
  to: email
}
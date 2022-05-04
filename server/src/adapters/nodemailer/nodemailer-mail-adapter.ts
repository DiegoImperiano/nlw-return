import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cff2b8b98966b9",
    pass: "b42001cb113a14"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Diego Imperiano <imperiano.cn@gmail.com>',
    subject,
    html: body
  }) 
  }
}
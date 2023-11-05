import nodemailer from "nodemailer";

export const sendEmailForPasswordReset = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.EMAIL_PORT,
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      html: `<p>Hello there!!
      Welcome to our website! 
     please use the link below to reset your password:
     password reset Link: ${text}   
     If you have any questions or need assistance with your account, please contact our support team at adiabajacob9@gmail.com
     
     Thank you for choosing us. We look forward to serving you!
     
     Best regards,
     </p>`,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log(`Email not sent due to ${error}`);
  }
};

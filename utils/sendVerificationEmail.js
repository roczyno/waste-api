import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, subject, text) => {
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

      Welcome to our website! We're excited to have you join us.
     
     To complete your account setup, please use the verification link below:
     
     Verification link: ${text}
     
     Please clcik on this link to start using our service.
     
     If you didn't sign up for an account with us, please ignore this message. Someone may have used your email address by mistake, and no further action is required.
     
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

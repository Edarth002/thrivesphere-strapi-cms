const nodemailer = require("nodemailer");

module.exports = {
  async sendEmail({ to, subject, text, html }) {
    try {
      console.log("🟡 Attempting to send email...");
      console.log("Recipient:", to);
      console.log("Subject:", subject);
      console.log("Text:", text);
      console.log("HTML:", html);
      console.log("SMTP Config:", {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        user: process.env.SMTP_USER,
        from: process.env.SMTP_FROM,
      });

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM,
        to,
        subject,
        text,
        html,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent:", info);

      return { message: "Email sent successfully!" };
    } catch (error) {
      console.error("❌ Error sending email:", error);
      throw new Error("Failed to send email: " + error.message);
    }
  },
};

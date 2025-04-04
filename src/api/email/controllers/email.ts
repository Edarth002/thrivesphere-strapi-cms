module.exports = {
  async send(ctx) {
    try {
      const { to, subject, text, html } = ctx.request.body;

      console.log("📨 Controller received email request:", { to, subject });

      const emailService = strapi.service("api::email.email");

      const response = await emailService.sendEmail({
        to,
        subject,
        text,
        html,
      });

      ctx.send({ message: "Email sent successfully", response });
    } catch (error) {
      console.error("❌ Controller caught error:", error);
      ctx.status = 500;
      ctx.send({ error: error.message });
    }
  },
};

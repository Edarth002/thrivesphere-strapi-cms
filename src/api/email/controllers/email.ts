module.exports = {
  async send(ctx: any) {
    try {
      const { to, subject, text, html } = ctx.request.body;

      await strapi.services.email.sendEmail({ to, subject, text, html });

      ctx.send({ message: "Email sent successfully!" });
    } catch (error) {
      ctx.throw(500, "Failed to send email");
    }
  },
};

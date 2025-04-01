module.exports = {
  async send(ctx: any) {
    try {
      const { to, subject, message } = ctx.request.body;

      await strapi.plugins["email"].services.email.send({
        to,
        from: "noreply@thrivesphere.com",
        subject,
        html: message,
      });

      ctx.send({ message: "Email sent Successfully" });
    } catch (error) {
      ctx.throw(error, "Email not sent");
    }
  },
};

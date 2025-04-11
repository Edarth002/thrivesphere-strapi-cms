import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::lesson.lesson",
  ({ strapi }) => ({
    async findByDocumentId(ctx) {
      const { documentId } = ctx.params;

      const entity = await strapi.db.query("api::lesson.lesson").findOne({
        where: { documentId },
      });

      if (!entity) {
        return ctx.notFound("lesson not found");
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);

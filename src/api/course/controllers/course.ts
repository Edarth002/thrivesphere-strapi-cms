import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::course.course",
  ({ strapi }) => ({
    async findByDocumentId(ctx) {
      const { documentId } = ctx.params;

      const entity = await strapi.db.query("api::course.course").findOne({
        where: { documentId },
      });

      if (!entity) {
        return ctx.notFound("Course not found");
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);

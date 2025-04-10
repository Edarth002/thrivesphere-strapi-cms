module.exports = {
  routes: [
    {
      method: "GET",
      path: "/courses/document/:documentId",
      handler: "course.findByDocumentId",
      config: {
        auth: false,
      },
    },
  ],
};

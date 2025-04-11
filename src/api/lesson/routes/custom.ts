module.exports = {
  routes: [
    {
      method: "GET",
      path: "/lessons/document/:documentId",
      handler: "lesson.findByDocumentId",
      config: {
        auth: false,
      },
    },
  ],
};

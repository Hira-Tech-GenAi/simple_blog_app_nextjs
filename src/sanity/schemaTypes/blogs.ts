export default {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title of blog article",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug of blog article",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "titleImage",
      title: "Title Image ",
      type: "image",
    },
    {
      name: "smallDescription",
      title: "Small Description",
      type: "text",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

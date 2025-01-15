// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
        date: fields.date({ label: 'Date' }),
        excerpt: fields.text({ label: 'Excerpt' }),
        tags: fields.array({ of: fields.string({ label: 'Tag' }) }),
        coverImage: fields.image({ 
            label: 'Cover Image',
            directory: 'public/images',
            publicPath: '/images', 
        }),
      },
    }),
  },
});


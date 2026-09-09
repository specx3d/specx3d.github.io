import { collection, config, fields, singleton } from '@keystatic/core';

const imageField = (label: string, directory: string, publicPath: string) =>
  fields.image({ label, directory, publicPath });

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Quiet Current Games' } },
  collections: {
    games: collection({
      label: 'Games',
      slugField: 'title',
      path: 'src/content/games/*',
      format: { contentField: 'longDescription' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        status: fields.select({
          label: 'Status',
          defaultValue: 'concept',
          options: [
            { label: 'Concept', value: 'concept' },
            { label: 'In development', value: 'development' },
            { label: 'Demo available', value: 'demo' },
            { label: 'Released', value: 'released' },
            { label: 'Paused', value: 'paused' },
          ],
        }),
        shortDescription: fields.text({ label: 'Short description', multiline: true, validation: { isRequired: true } }),
        longDescription: fields.markdoc({
          label: 'Long description',
          options: { image: { directory: 'public/media/content', publicPath: '/media/content/' } },
        }),
        heroImageLight: imageField('Light hero image', 'public/media/games', '/media/games/'),
        heroImageDark: imageField('Dark hero image', 'public/media/games', '/media/games/'),
        gallery: fields.array(imageField('Gallery image', 'public/media/games', '/media/games/'), {
          label: 'Gallery',
          itemLabel: (props) => props.value?.filename || 'Image',
        }),
        trailerUrl: fields.url({ label: 'Trailer URL' }),
        storeUrl: fields.url({ label: 'Store / Steam URL' }),
        platforms: fields.array(fields.text({ label: 'Platform' }), {
          label: 'Platforms',
          itemLabel: (props) => props.value || 'Platform',
        }),
        releaseDateOrWindow: fields.text({ label: 'Release date or window' }),
        tags: fields.array(fields.text({ label: 'Genre / tag' }), {
          label: 'Genres and tags',
          itemLabel: (props) => props.value || 'Tag',
        }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        sortOrder: fields.integer({ label: 'Sort order', defaultValue: 100 }),
        accent: fields.text({ label: 'Optional accent colour', description: 'Use a CSS colour such as #c77b45.' }),
        pressKitUrl: fields.url({ label: 'Optional project press-kit URL' }),
      },
    }),
    news: collection({
      label: 'News / Dev Log',
      slugField: 'title',
      path: 'src/content/news/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Publication date', validation: { isRequired: true } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true, validation: { isRequired: true } }),
        coverImage: imageField('Cover image', 'public/media/news', '/media/news/'),
        body: fields.markdoc({
          label: 'Article',
          options: { image: { directory: 'public/media/content', publicPath: '/media/content/' } },
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value || 'Tag',
        }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        relatedGame: fields.relationship({ label: 'Related game', collection: 'games' }),
      },
    }),
  },
  singletons: {
    site: singleton({
      label: 'Site settings',
      path: 'src/content/settings/site',
      format: { data: 'json' },
      schema: {
        studioShortDescription: fields.text({ label: 'Studio short description', multiline: true }),
        contactEmail: fields.text({ label: 'Contact email' }),
        xUrl: fields.url({ label: 'X URL' }),
        youtubeUrl: fields.url({ label: 'YouTube URL' }),
        steamUrl: fields.url({ label: 'Steam URL' }),
        defaultSeoTitle: fields.text({ label: 'Default SEO title' }),
        defaultSeoDescription: fields.text({ label: 'Default SEO description', multiline: true }),
        pressKitUrl: fields.url({ label: 'External press-kit URL' }),
        featuredGame: fields.relationship({ label: 'Homepage featured game', collection: 'games' }),
      },
    }),
  },
});

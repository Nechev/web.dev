module.exports = {
  // Tags are inherited by all posts.
  tags: ['media'],
  path: {
    // Slug is used by landing pages like / and /learn to link to this path.
    // Because it affects urls, the slug should never be translated.
    slug: 'media',
    cover: '/images/collections/media.svg',
    title: 'Media',
    updated: 'June 10, 2020',
    description: `Add audio and video to your web sites`,
    overview: `Learn to add media capabilities to your website using either
    basic markdown or a media framework such as Google's Shaka Player, JW
    Player or Video.js.`,
    topics: [
      {
        title: 'Conceptual basics',
        pathItems: [
          'media-experience',
          'file-basics',
          'application-basics',
          'cheetsheet',
        ],
      },
      {
        title: 'Prepare media files for the web',
        pathItems: [
          'prepare-media',
          'containers-and-codecs',
          'bitrate',
          'resolution',
          'encryption',
        ],
      },
      {
        title: 'Add media to a web page',
        pathItems: [
          'add-media',
          'video-and-source-tags',
          'accessibility-with-the-track-tag',
        ],
      },
    ],
  },
};

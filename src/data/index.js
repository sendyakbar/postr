const posts = [
  {
    id: 'f14dc68c-7882-4db5-a735-e2061433929a',
    userId: 'b8057b5e-089e-497e-b2ce-965ee556f4b2',
    text: 'Halo-halo bandung, ibukota periangan. Halo-halo bandung, ibukota periangan',
    createdAt: new Date(),
    geoLocation: {
      latitude: 37.4226711,
      longitude: -122.0849872,
    },
  },
  {
    id: 'd5bca7d9-0c5c-4f1f-b315-117e53d8414d',
    userId: '91b4f06b-19a5-401b-9f23-998276441492',
    text: 'Sudah lama beta tidak berjumpa dengan kau. Sudah lama beta tidak berjumpa dengan kau',
    createdAt: new Date(),
    geoLocation: {
      latitude: 37.4226711,
      longitude: -122.0849872,
    },
  },
];

const replies = [
  {
    id: '58f24887-38a3-4d05-9dd5-fcbb1e580df4',
    postId: 'd5bca7d9-0c5c-4f1f-b315-117e53d8414d',
    userId: 'b8057b5e-089e-497e-b2ce-965ee556f4b2',
    text: 'ah masa sih?',
    createdAt: new Date(),
    geoLocation: {
      latitude: 37.4226711,
      longitude: -122.0849872,
    },
  },
  {
    id: 'ea291375-362e-4aac-b2c2-428e28ca487e',
    postId: 'f14dc68c-7882-4db5-a735-e2061433929a',
    userId: '91b4f06b-19a5-401b-9f23-998276441492',
    text: 'oooh begituu...',
    createdAt: new Date(),
    geoLocation: {
      latitude: 37.4226711,
      longitude: -122.0849872,
    },
  },
];

export {posts, replies};

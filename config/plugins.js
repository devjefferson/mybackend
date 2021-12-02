module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "firebase-storage",
    providerOptions: {
      serviceAccount: require("../geekquotes-e2df8-1c2270817952.json"),
      bucketUrl: env("STORAGE_BUCKET_URL"),
      options: {},
      customBucket: "/",
      debug: true,
      uploadOptions: {
        resumable: false,
        private: true,
      },
      deleteOptions: {},
    },
  },
  // ...
});
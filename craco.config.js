const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      'assets': resolve("src/assets"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

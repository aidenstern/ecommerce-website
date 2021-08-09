var path = require("path");
const fs = require("fs");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    https: {
      key: fs.readFileSync('./certs/example.com+5-key.pem'),
      cert: fs.readFileSync('./certs/example.com+5.pem'),
    },
    public: 'https://localhost:8080/'
}
};

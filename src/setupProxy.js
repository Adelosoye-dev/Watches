// import { createProxyMiddleware } from "http-proxy-middleware";

// export default function (app) {
//   app.use(
//     "/products",
//     createProxyMiddleware({
//       target: "https://api.timbu.cloud",
//       changeOrigin: true,
//     })
//   );
// }

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.timbu.cloud",
      changeOrigin: true,
    })
  );
};

// const path = require("path");

// module.exports = {
//   entry: "./public/microfrontends.js", // Change this to the actual entry point
//   output: {
//     path: path.resolve(__dirname, "public/build"),
//     filename: "my-component.js",
//     library: "MyComponent",
//     libraryTarget: "umd",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
// };


const path = require("path");

module.exports = {
  entry: "./public/microfrontends.js", // Update this to the correct path
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "microfrontends.js", // Output file name
    library: "Microfrontends", // Global variable name
    libraryTarget: "umd", // Universal Module Definition
    globalObject: "this", // Ensure compatibility with both browser and Node.js
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: "React", // Externalize React
    "react-dom": "ReactDOM", // Externalize ReactDOM
  },
};
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    background: "./src/background.ts",
    day9tv: "./src/day9tv/index.ts",
    popup: "./src/popup/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, process.env.NODE_ENV === "production" ? "dist" : "build"),
  },
};

const { resolve } = require("path");

module.exports = {
  mode: "prod",
  entry: "./src/components/Dropdown/Dropdown.tsx",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              compilerOptions: {
                module: "es2015"
              }
            }
          }
        ],
        exclude: [resolve(__dirname, "node_modules")]
      }
    ]
  }
};

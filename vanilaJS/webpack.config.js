const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  entry: "./School.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
/*

To make simple JS app go to prod , I first did npm init . This gave me package.json 
Then installed webpack and webapck-cli as dev dependencies 
Then craeted this file , basic entry and output . 
The html file was not getting packaged so added html webpack plugin that picked up html file 
Faced issues with path of dist so used path ibrary 

used http-server to see output . index.html  auto links the bundle.js along with it . 
*/

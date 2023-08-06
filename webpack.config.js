import { merge } from "webpack-merge";
import singleSpaDefaults from "webpack-config-single-spa-react";

export default (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sidebar",
    projectName: "sidebar-vuexy",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ],
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
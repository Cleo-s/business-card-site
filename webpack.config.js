const path = require("path");

module.exports = {
   entry: path.resolve(__dirname, "src"),
   module: {
      rules: [
         {
            test: /\.(sa|sc|c)ss$/, // styles files
            use: [
               {
                  loader: "sass-loader",
                  options: {
                     sassOptions: {
                        indentWidth: 4,
                        includePaths: ["src"],
                     },
                  },
               },
            ],
         },
      ],
   },
};

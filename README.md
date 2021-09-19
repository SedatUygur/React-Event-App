# Author
![@Rafase282](https://avatars.githubusercontent.com/u/90511329?s=128&u=8de1c9bd1ac0d19533748f20d1cf3486aa45c667&v=4)

Created by Sedat Can Uygur

[Github](https://github.com/SedatUygur) | [FreeCodeCamp](http://www.freecodecamp.com/pcengineer48) | [CodePen](http://codepen.io/SedatUygur) | [LinkedIn](https://www.linkedin.com/in/sedat-can-uygur) | [E-Mail](mailto:sedatcan_92@hotmail.com)

# React Event App

React Event App using React, React Scripts and Leaflet

# Why do I use Yarn?

I think Yarn is better than npm in many ways. You can read these articles to understand it better.

https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/

https://medium.com/innovance-company-blog/npm-vs-yarn-vs-pnpm-f71796b9b085

# Installing modules, building and running

yarn add react-scripts

yarn add typescript (If you want to use the supported typescript version, you can run the command like "yarn add typescript@4.2.4")

yarn start for development mode

yarn build for production mode

# Warnings, Errors and Solutions

if you can get an error like "an unexpected error occurred ...:ESOCKETTIMEDOUT", you can increase the network timeout "yarn config set network-timeout 300000"

if you can get an error like this "./node_modules/@react-leaflet/core/esm/path.js Module parse failed: Unexpected token",

you can replace this part of your package.json 

"browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
}

to 

"browserslist": [
    ">0.2%",
    "not dead",
    "not op_mini all"
]

Delete node_modeules/.cache directory. 

Then run yarn install and yarn start. 

If there is any problem with Yarn you can not solve, you can use npm.

Reference : https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat

If you see "Browserslist: caniuse-lite is outdated" message in command line, you can run "npx browserslist@latest --update-db"

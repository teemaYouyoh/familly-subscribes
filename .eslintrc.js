module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
    },
    "extends": [
        "airbnb-base",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "no-unused-vars": [1],
        "brace-style": ["error", '1tbs'],
        "indent": ["error", 2],
        "no-console": "off",
        "linebreak-style": ["error", "windows"],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-self-assign": ["error", { "props": false }],
        "no-param-reassign": ["error", { "props": false }],
        "arrow-body-style": ["error", "always"],
        "class-methods-use-this": ["error", { "exceptMethods": ["render"] }],
        "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    },
    "parser" : "babel-eslint"
};

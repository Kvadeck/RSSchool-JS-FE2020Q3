module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",

    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },

    "rules": {
        "no-plusplus": "off",
        "class-methods-use-this": "off",
        "no-unused-expressions": [2, { "allowTernary": true }],
        "no-plusplus": "off",
    }
};

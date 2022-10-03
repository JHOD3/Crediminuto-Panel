module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    // Disable Eslint for .js files
    "overrides": [
        {
            "files": ["*.js"],
        }
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-undef": "off",
        "max-len": "off",
        'indent': 'off',

    }
};

/**
 * ESlint config.
 */

'use strict';

// public
module.exports = {
    // base rules
    extends: require.resolve('spa-eslint-config/.eslintrc.js'),

    rules: {
        'new-cap': 0,
        'no-empty-function': 0,
        'no-eval': 0,
        'strict': 0
    }
};

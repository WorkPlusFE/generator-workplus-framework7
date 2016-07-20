'use strict';

const path = require('path');
const generators = require('yeoman-generator');
const _ = require('underscore.string');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        // This makes `appname` a required argument.
        this.argument('appname', { type: String, required: true });
        // And you can then access it later on this way; e.g. CamelCased
        this.appname = _.camelCase(this.appname);
    },
    writing(){

    }
});
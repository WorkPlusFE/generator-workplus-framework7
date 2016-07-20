'use strict';

const path = require('path');
const generators = require('yeoman-generator');
const _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('name', { type: String, required: true });
        this.name = _.camelCase(this.name);
        this.log('Add new page module: ' + this.name);
    },
    writing(){
        var pageName = {name: this.name};
        this.fs.copyTpl(
            this.templatePath('_page.html'),
            this.destinationPath(`src/page/${this.name}.html`), 
            pageName
        );
        this.fs.copyTpl(
            this.templatePath('_page.js'),
            this.destinationPath(`src/app/${this.name}/${this.name}.js`), 
            pageName
        );
        this.fs.copyTpl(
            this.templatePath('_page.less'),
            this.destinationPath(`src/app/${this.name}/${this.name}.less`), 
            pageName
        );
        this.fs.copyTpl(
            this.templatePath('_page.tpl.html'),
            this.destinationPath(`src/app/${this.name}/${this.name}.tpl.html`), 
            pageName
        );
    }
});
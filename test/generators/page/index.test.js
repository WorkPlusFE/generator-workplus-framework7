'use strict'

let path = require('path');
let expect = require('chai').expect;
let assert = require('yeoman-assert');
let helpers = require('yeoman-test');

const generatorBase = path.join(__dirname, '../../../generators/page');

let generator;

const beforeLoad = (name) => {

  return helpers.run(generatorBase)
    .inTmpDir()
    .withArguments([name])
    .on('ready', function(instance) {
      generator = instance;
    })
    .toPromise();
};

describe('workplus-framework7:page', () => {

    let pageName = 'list';

    before(() => {
        return beforeLoad(pageName);
    });

    describe('#create page files', () => {
       
        it('should generate required page files', () => {
            assert.file([
                `src/app/${pageName}/${pageName}.js`,
                `src/app/${pageName}/${pageName}.tpl.html`,
                `src/app/${pageName}/${pageName}.less`,
                `src/page/${pageName}.html`
            ]);
        })
    });
});
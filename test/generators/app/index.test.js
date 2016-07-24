'use strict'

let path = require('path');
let expect = require('chai').expect;
let assert = require('yeoman-assert');
let helpers = require('yeoman-test');

const defaultPrompts = require('../../../generators/app/prompts.js');
const generatorBase = path.join(__dirname, '../../../generators/app');

let generator;

const beforeLoad = (prompts) => {

  return helpers.run(generatorBase)
    .inTmpDir()
    .withPrompts
    (prompts)
    .on('ready', function(instance) {
      generator = instance;
    })
    .toPromise();
};

describe('workplus-framework7:app', () => {

    let prompts = {};
    for (let p in defaultPrompts) {
        prompts[p.name] = p.default;
    }

    before(() => {
        return beforeLoad(prompts);
    });

    describe('#create source files', () => {
        it('should generate project configuration files', () => {
            assert.file('package.json');
        });

        it('should generate the webpack configuration files', () => {
            assert.file('webpack.config.js');
        });

        it('should generate required source files', () => {
            assert.file([
                'src/index.html',
                'src/app/index.js',
                'src/app/router.js',
                'src/app/home/home.js',
                'src/app/home/home.tpl.html',
                'src/app/home/home.less',
                'src/page/detail.html',
            ]);
        })
    });
});
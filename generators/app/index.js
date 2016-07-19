'use strict';

const path = require('path');
const generators = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const prompts = require('./prompts.js');

module.exports = generators.Base.extend({
    initializing(){
        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the ' + chalk.red('WorkPlus Framework7') + ' generator!'));
    },
    prompting(){
        return this.prompt(prompts).then((props) => {
            this.props = props;
            this.log('Copy the configuration files');
        });
    },
    writing: {
        //Copy the configuration files
        config() {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), 
                {
                    props: this.props
                }
            );
            this.fs.copy(
                this.templatePath('_webpack.config.js'),
                this.destinationPath('webpack.config.js')
            );
            this.fs.copy(
                this.templatePath('_gitignore'),
                this.destinationPath('.gitignore')
            );
        },

        //Copy application files
        app() {
            // app
            this.fs.copy(
                this.templatePath('_src'),
                this.destinationPath('src')
            );
            //index html
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('src/index.html'), {
                    name: this.props.name
                }
            );
        }
    },
    install(){
        this.installDependencies({ bower: false });
    },
    end(){
        this.log('All done!');
    }
});
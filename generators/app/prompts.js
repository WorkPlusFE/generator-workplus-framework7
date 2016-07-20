'use strict';

const tool = require('../../utils/tool');

module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'name of app:', 
        default: tool.getAppName()
    },
    {
        type: 'input',
        name: 'description',
        message: 'description:', 
        default: ''
    },
    {
        type: 'input',
        name: 'repo',
        message: 'git repository:', 
        default: ''
    },
    {
        type: 'input',
        name: 'license',
        message: 'license:', 
        default: 'ISC'
    },
    {
        type: 'input',
        name: 'author',
        message: 'author:', 
        default: 'your name here'
    }
];
"use strict";

const webJsConfig = require('./web-js-config.js')
const webJsJestConfig = require('./web-js-jest-config.js')
const webJsReactConfig = require('./web-js-react-config.js')
const webJsJestReactConfig = require('./web-js-jest-react-config.js')

const webTsConfig = require('./web-ts-config.js')
const webTsJestConfig = require('./web-ts-jest-config.js')
const webTsReactConfig = require('./web-ts-react-config.js')
const webTsJestReactConfig = require('./web-ts-jest-react-config.js')

const config = module.exports = webJsConfig

config.webJsConfig = webJsConfig
config.webJsJestConfig = webJsJestConfig
config.webJsReactConfig = webJsReactConfig
config.webJsJestReactConfig = webJsJestReactConfig

config.webTsConfig = webTsConfig
config.webTsJestConfig = webTsJestConfig
config.webTsReactConfig = webTsReactConfig
config.webTsJestReactConfig = webTsJestReactConfig

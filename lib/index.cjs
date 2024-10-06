"use strict";

const webJsConfig = require('./web-js-config.cjs')
const webJsJestConfig = require('./web-js-jest-config.cjs')
const webJsReactConfig = require('./web-js-react-config.cjs')
const webJsJestReactConfig = require('./web-js-jest-react-config.cjs')

const webTsConfig = require('./web-ts-config.cjs')
const webTsJestConfig = require('./web-ts-jest-config.cjs')
const webTsReactConfig = require('./web-ts-react-config.cjs')
const webTsJestReactConfig = require('./web-ts-jest-react-config.cjs')

const config = module.exports = webJsConfig

config.webJsConfig = webJsConfig
config.webJsJestConfig = webJsJestConfig
config.webJsReactConfig = webJsReactConfig
config.webJsJestReactConfig = webJsJestReactConfig

config.webTsConfig = webTsConfig
config.webTsJestConfig = webTsJestConfig
config.webTsReactConfig = webTsReactConfig
config.webTsJestReactConfig = webTsJestReactConfig

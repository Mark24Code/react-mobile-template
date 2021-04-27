const path = require('path');
const paths = require('./paths');

const appSrc = paths.appSrc;

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

const SettingPathDir = path.resolve(appSrc, 'settings');

let SettingPath = path.resolve(SettingPathDir, 'production.settings.js');

if (isProd) {
  SettingPath = path.resolve(SettingPathDir, 'production.settings.js');
} else if (isTest) {
  SettingPath = path.resolve(SettingPathDir, 'test.settings.js');
} else if (isDev) {
  SettingPath = path.resolve(SettingPathDir, 'develop.settings.js');
} else {
  SettingPath = path.resolve(SettingPathDir, 'local.settings.js');
}

console.log(SettingPath)
console.log(SettingPath)
console.log(SettingPath)
console.log(SettingPath)
setTimeout(() => { console.log(SettingPath) }, 1000)
module.exports = SettingPath;
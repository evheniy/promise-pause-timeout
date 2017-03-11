Promise pause timeout
=====================

It could be useful when you need to make pause in promise pipeline


[![NPM](https://nodei.co/npm/promise-pause-timeout.png)](https://npmjs.org/package/promise-pause-timeout)

[![npm version](https://badge.fury.io/js/promise-pause-timeout.svg)](https://badge.fury.io/js/promise-pause-timeout)
[![Build Status](https://travis-ci.org/evheniy/promise-pause-timeout.svg?branch=master)](https://travis-ci.org/evheniy/promise-pause-timeout)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/promise-pause-timeout/badge.svg?branch=master)](https://coveralls.io/github/evheniy/promise-pause-timeout?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/promise-pause-timeout/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/promise-pause-timeout/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/promise-pause-timeout)

[![Dependency Status](https://david-dm.org/evheniy/promise-pause-timeout.svg)](https://david-dm.org/evheniy/promise-pause-timeout)
[![devDependency Status](https://david-dm.org/evheniy/promise-pause-timeout/dev-status.svg)](https://david-dm.org/evheniy/promise-pause-timeout#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/promise-pause-timeout)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/promise-pause-timeout/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/promise-pause-timeout.svg)](https://github.com/evheniy/promise-pause-timeout/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/promise-pause-timeout.svg)](https://github.com/evheniy/promise-pause-timeout/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/promise-pause-timeout.svg)](https://github.com/evheniy/promise-pause-timeout/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/promise-pause-timeout.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)



Installation
------------

    npm i -S promise-pause-timeout
    
Example
-------

    const pause = require('promise-pause-timeout');
    
    (async () => {
        
        const data1 = await fetch(url1);
        await pause(1000);
        const data2 = await fetch(url2);
        
    })();

Promise timeout
===========================

It could be useful when you need to make pause in promise pipeline


[![Build Status](https://travis-ci.org/evheniy/promise-timeout.svg?branch=master)](https://travis-ci.org/evheniy/promise-timeout)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/promise-timeout/badge.svg?branch=master)](https://coveralls.io/github/evheniy/promise-timeout?branch=master)


Installation
------------

    npm i -S promise-timeout
    
Example
-------

    const pause = require('promise-timeout');
    
    (async () => {
        const data1 = await fetch(url1);
        await pause(1000);
        const data2 = await fetch(url2);
    })();
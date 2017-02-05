Promise pause timeout
=====================

It could be useful when you need to make pause in promise pipeline


[![Build Status](https://travis-ci.org/evheniy/promise-pause-timeout.svg?branch=master)](https://travis-ci.org/evheniy/promise-pause-timeout)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/promise-pause-timeout/badge.svg?branch=master)](https://coveralls.io/github/evheniy/promise-pause-timeout?branch=master)


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
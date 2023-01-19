'use strict';
// https://javascript.info/call-apply-decorators

// if we have function the function slow( ) that works with high values 
// and the outcome depends only the income value and always be the same : 
// we can cache it : 


function slow(x) {
    console.log(`Called with : ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if(cache.has(x)) {
            return cache.get(x);
        }
        
        let result = func(x);
        
        cache.set(x, result);
        return result;
    }
}

slow = cachingDecorator(slow);
console.log(slow(1)); // slow(1) - caching 
console.log('Again ' + slow(1)); // using cache already
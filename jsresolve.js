/**
 *  JSResolve a deep sub object, referred to by a string, within another 
 *  object. Returns undefined if anything doesn't fit.
**/

function jsresolve(base, path) { 

    if(base === undefined || path === undefined)
        return undefined;

    if(typeof(path)!=='string')
        return undefined;

    var levels = path.split(".");
    var result = base;

    for(var i=0; i<levels.length; i++) { 
        var level = levels[i];
        if(result[level]!==undefined)
            result = result[level];
        else
            return undefined;
    }

    return result;

};

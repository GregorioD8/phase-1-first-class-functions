function callMe() {
    console.log('callMe() function was called back')
}

//The receivesAFunction function should:
//take a callback function as an argument
//call the callback function
//it doesn't matter what this function returns, so long as it calls the callback function
function receivesAFunction(callMe) {
    return callMe()
}

//created a named function to be returned 
const imNamedFunction = function() {
    return 'Im named function'
}

//The returnsANamedFunction function should:
//take no arguments
//return a named function
function returnsANamedFunction() {

    return imNamedFunction
}

//The returnsAnAnonymousFunction function should:
//take no arguments
//return an anonymous function
function returnsAnAnonymousFunction() {

    return function() {'anonymous'}
}




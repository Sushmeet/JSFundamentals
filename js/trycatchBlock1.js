

try {
    console.log ('Try block begins');

   // unsushi;

    console.log('wont ever execute dude')
    
} catch (error) {

    console.log('Error has  occured :' + error.stack);
    
} finally {
    console.log ('Run this finally code after try and catch')
}

console.log ('Program goes on normally');


// WRONG WAY 

// try {
//     setTimeout(function () {
//         noSuchVariable; // script dies here/
//     }, 1000);
// } catch (error) {
//     console.log('wont work');
// }

// console.log('go on');


// RIGHT WAY

setTimeout(function () {
    try {
     noSuchVariable; // error happens here 

    } catch (error) {
        console.log('error is caught this time.')
    }
},1000);


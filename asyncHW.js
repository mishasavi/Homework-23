//Problem -> console 10 time 10
for (var i = 0; i < 10; i++) {
    (function (index) {
        setTimeout(function () {
            console.log(index);
        },1000);
    })(i);
}
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },1000);
// }



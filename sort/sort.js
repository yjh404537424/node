function sortNumber(x, y)
{
    if (x < y) {
        return -1; 
    }   

    if (x > y) {
        return 1;
    }   

    return 0;
}

var arr = new Array(6)
    arr[0] = 10;
    arr[1] = 5;
    arr[2] = 40;
    arr[3] = 25;
    arr[4] = 1000;
    arr[5] = 1;

    var arrNum = new Array();
    for ( var i= 0; i < 10; i++) {
        arrNum[i] = String(Math.round(Math.random() * 2000));
    }

console.log("length : "+ arrNum.length);
var t1 = new Date().getTime();
console.log("before : "+ t1);
console.log(arrNum);
for ( var i= 0; i < arrNum.length; i++) {
        arrNum[i] = Number(arrNum[i]);
}
arrNum.sort(sortNumber);
var t2 = new Date().getTime();
console.log("after : "+t2);
    t = t2 - t1;
console.log(arrNum);
console.log("time: "+ t);


/*
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]
console.log(arr);
*/

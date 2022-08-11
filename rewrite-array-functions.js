// var a = [1, 2, 3, 4, 5, 6];
// var b = [10, 20, 30];

// function mypush(array, value) {

//     var length = array.length;

//     array[length] = value;

//     return array;

// }
// a = mypush(a,10);
// console.log(a);


// function mypop(array) {
//     let newArray =[];
//     for (let i = 0; i < array.length-1; i++) {
//          newArray[i] = array[i];

//     }
//     return newArray;
// }
// a =mypop(a);
// console.log(a);

// function myShift(array) {
//     let newArray = [];
//     j=0;
//     for (let i = 1; i < array.length; i++) {
//         newArray[j] = array[i];
//         j++;

//     }
//     return newArray;

// }
// a=myShift(a);
// console.log(a);

// function myReverse(array) {
//     let length = array.length - 1;
//     let newArray = [];
//     j = 0;
//     for (let i = length; i >= 0; i--) {
//         newArray[j] = array[i];
//         j++;

//     }
//     return newArray;
// }
// a = myReverse(a)
// console.log(a);


// function myFill(value, start, end) {
//     if (start == 0 && end == 0) {
//         for (let i = 0; i < a.length; i++) {
//             a[i] = value;

//         }
//     } else {
//         for (let i = start; i < end; i++) {
//             a[i] = value;

//         }
//     }
//     return a;
// }
// a = myFill("g", 0, 2);
// console.log(a);

// function myUnShift(array,value) {
//     let newArray=[];
//     newArray[0]=value;
//     j=1;
//     for (let i = 0; i <array.length; i++) {
//         newArray[j] = array[i];
//         j++;

//     }

//     return newArray;
// }
// a=myUnShift(a,"muthu");
// console.log(a);

// function myCancat(array1, array2) {

//     var newArray = [];

//     j = array1.length;
//     for (let i = 0; i < array1.length; i++) {
//         newArray[i] = array1[i];
//     }
//     for (let i = 0; i < array2.length; i++) {
//         newArray[j] = array2[i];
//         j++;

//     }
//     return newArray;
// }
// c = myCancat(a, b);
// console.log(c);

// function mySlice(start,end) {
//     let newArray=[];
//     j=0;
//     if (start) {
//         for (let i = start; i < end; i++) {
//             newArray[j]= a[i];
//             j++;

//     }

//     }else{

//     for (let i = start; i < a.length; i++) {
//         newArray[j] = a[i];

//     }
// }
//     return newArray;
// }
// c= mySlice(3);
// console.log(c);
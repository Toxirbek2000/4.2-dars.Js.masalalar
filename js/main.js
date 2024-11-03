// 1_rasmdagi masalalar

// 1-Masala

// let a = prompt("Birinchi sonni kiriting")
// let b = prompt("Ikkinchi sonni kiriting")
// let c = prompt("Uchinchi sonni kiriting")

// if(a > b && b > c || c > b && b > a){
//     console.log(b);
// }
// else if(b > a && a > c || c > a && a > b){
//     console.log(a);
// }
// else if(b > c && c > a || a > c && c > b){
//     console.log(c);
// }


// 2-Masala

// let a = prompt("Uch honali son kiriting")
// let firstnumber = Math.floor(a / 100)
// if(firstnumber % 2 == 0){
//     alert("Birinchi raqam juft")
// }
// else{
//     alert("Birinchi raqam toq")
// }


// 3-Masala

// let a = prompt("Ixtiyoriy son kiriting")
// let reasult = Math.round((a * 100) / 150)

// console.log(reasult + " foiz");


// 4-Masala

// for(let i = 5; i <= 20; i++){
//     if(i % 2 == 0)
//     console.log(i);
// }


// 5-Masala

// let arr = ["salom", "nima gap", "tinchlik", "25", "49"]

// for (let word of arr) {
//     if (word === "salom"){
//         console.log(word);
//         break;
//     }
// }


// 6-Masala

// let arr = [42, "hello", true, "world",85]

// for (let index in arr) {
//     if (typeof arr[index] === "boolean") {
//         console.log(`Boolean qiymat: ${arr[index]}, Indeks: ${index}`);
//     }
// }


// 7-Masala

// let arr = [12, 21, 30, 4, 51, 16, 7, 18, 9, 10]

// let evenSum = 0 // Juft raqamlar yig'indisi
// let oddSum = 0  // Toq raqamlar yig'indisi

// for (let num of arr) {
//     if (num % 2 === 0) {
//         evenSum += num;
//     } else {
//         oddSum += num;
//     }
// }

// console.log("Juft raqamlar yig'indisi: ", evenSum);
// console.log("Toq raqamlar yig'indisi: ", oddSum);


 // 8-Masala

//  let a = prompt("1.Ixtiyoriy son kiriting");
//  let b = prompt("2.Ixtiyoriy son kiriting");
//  let operator = prompt("Operatorni kiriting (+, -, *, /):");
//  let result;
 
//  switch (operator) {
//      case '+':
//          result = a + b;
//          break;
//      case '-':
//          result = a - b;
//          break;
//      case '*':
//          result = a * b;
//          break;
//      case '/':
//          result = b !== 0 ? a / b : "Nolga bo'lish mumkin emas";
//          break;
//      default:
//          result = "Noto'g'ri operator";
//  }
 
//  console.log(result);
 
 // 9-Masala

// let number = [-5,7,-45,74,-12,-15]
// for(let i = 0; i < number.length;i++){
//     number[i] = Math.abs(number[i])
// }
// console.log(number);



// 2_rasmdagi masalalar

// 1-Masala


// let arr = [2,5,7,3,95,14,15,19]
// let result = arr[0] + arr[arr.length - 1]

// console.log(result);

// 2-Masala

// a) 1-usul
// let arr = [25, 4, 47, 74, 3, 104]

// console.log(Math.max(...arr));

// b) 2-usul
// let numbers = [23,74,85,12,17,54,19]
// let maxNum = numbers[0]

// for(let num of numbers){
//     if(num > maxNum){
//         maxNum = num
//     }
// }
// console.log(maxNum);


// 3-Masala

// let number = [5,7,45,74,12,15]
// for(let i = 0; i < number.length;i++){
//     number[i] = number[i] + 1
// }
// console.log(number);

// 4-Masala

// let number = prompt("Ixtiyoriy son kiriting") - 0

// for(let i = 1; i <= number;i++){
//     if(number % i == 0){
//         console.log(i);
//     }
// }

// 5-Masala

// let arr1 = [13,45,52,12,6,7]
// let arr2 = [75,85,13,7,79,52]
// let resArr = []

// for(let num1 of arr1){
    
//     for(let num2 of arr2){
//         if(num1 == num2){
//             resArr.push(num1);
//         }
//     }
// }
// console.log(resArr);

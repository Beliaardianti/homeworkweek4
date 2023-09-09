// let nilai1 = 10;
// let nilai2 = 9;
// console.log(nilai1+nilai2);


// // Case mahasiswa 
// let ipk = 2.8 ;
// if (ipk > 3.5) {
//    console.log("caumlade");
// }else if (ipk >= 3 && ipk <= 3.5) {
//     console.log("baik");
// }else {
//     console.log("cukup");
// }

// Game Tebak Nilai 
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const TebakNilai = Math.floor(Math.random() * 10) + 1;

// let jumlahTebakan = 0;

// function main () {
//     rl.question("Masukan angka 1 dari 10: " , (tebak) => {
//         jumlahTebakan++;

//         if(isNaN(tebak)) {
//             console.log("Masukan Angka yang valid");
//         } else{
//             tebak = parseInt(tebak);
//             if(tebak < TebakNilai){
//                 console.log("Angka yang kamu masukan terlalu Rendah");
//             }else if(tebak > TebakNilai) {
//                 console.log("Angka yang kamu masukan terlalu Tinggi");
//                 console.log(`Nomor yang Benar adalah ${TebakNilai}`);
//             } else {
//                 console.log(`Selamat kamu menang dengan menebak angka ${TebakNilai} dengan ${jumlahTebakan} kali mencoba `)

//                 if (TebakNilai === 6){
//                     console.log("Selamat Kamu Menang hadiah tambahan karena menebak angka 6");
//                 }

//                 rl.close();
//                 return
//             }
//         }
//         main();
//     })
// }
// main();


// Gunakan nilai random untuk mendapatkan 10 bilangan array
// - Tentukan total, rata rata, min, max
// - Jangan gunakan function bawaan dari javascript, buatlah algoritma sendiri untuk 
// menentukan total, rata rata, min dan max
const arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 8);
}
console.log(arr);

let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}

console.log('Total:', total);

// Rata Rata
const average = total / arr.length;
console.log('Rata-rata:', average);

// Menghitung Nilai Min dan Max
let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log('Nilai Minimum (Min):', min);
console.log('Nilai Maksimum (Max):', max);

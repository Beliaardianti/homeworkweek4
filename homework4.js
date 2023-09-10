console.log("**** Homework Javascript & Version Control Rakamin academy  Week 4 ***")
console.log("\n");

// Buatlah nilai random ( 1 samapai 50 ) pada 1 array 
const NilaiRandom = [];
for (let i = 0; i < 100; i++) {  
  NilaiRandom.push(Math.floor(Math.random()*50)+1);
}

 // Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array

const arrayGenap = [];
const arrayGanjil = [];

for (let i = 0; i < NilaiRandom.length; i++) {
  if (NilaiRandom [i] % 2 === 0) {
    arrayGenap.push(NilaiRandom[i]);
  } else {
   arrayGanjil.push(NilaiRandom[i]);
  }
}

// menghitung min dan max secara manual
// Menentukan nilai minimum (min) dan nilai maksimum (max) 
function nilaiMin (array){
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;

}



function nilaiMax (array){
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;

} 


// Menghitung Total 
function Total(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;

}


// Menghitung Rata Rata 
// Saya menggunakan var karena dari soal untuk implementasi var 


function ratarata (array){
  var total = Total(array);
  return total / array.length;

}


const minGenap = nilaiMin(arrayGenap);
const maxGenap = nilaiMax(arrayGenap);
const totalGenap = Total(arrayGenap);
const ratarataGenap = ratarata(arrayGenap);
const minGanjil = nilaiMin(arrayGanjil);
const maxGanjil = nilaiMax(arrayGanjil);
const totalGanjil = Total(arrayGanjil);
const ratarataGanjil = ratarata(arrayGanjil);

console.log("Array Random dengan jumlah index 100", NilaiRandom);
console.log("Array genap dengan jumlah index 50", arrayGenap);
console.log(" Array ganjil dengan jumlah index 50",arrayGanjil);
console.log("\n");
console.log("Nilai Min pada array genap:", minGenap);
console.log("Nilai Max pada array genap:", maxGenap);
console.log("Rata-rata pada array genap:", ratarataGenap);
console.log("Total pada array genap:", totalGenap);
console.log("\n");

console.log("Nilai Min pada array ganjil:", minGanjil);
console.log("Nilai Max pada array ganjil:", maxGanjil);
console.log("Rata-rata pada array ganjil:", ratarataGanjil);
console.log("Total pada array ganjil:", totalGanjil);
console.log("\n");


// Perbandingan nilai min, max, total dan rata rata
console.log("***** Perbandingan nilai min, max, total dan rata rata *****");
if (minGenap >= minGanjil) {
  console.log("Nilai Min pada array genap kecil besar dari nilai Min array ganjil");
} else {
  console.log("Nilai min pada array genap dan nilai min pada array ganjil memilki nilai yang sama");
}

if (maxGanjil <= maxGenap) {
  console.log("Nilai Max pada array genap lebih besar dari nilai Max array ganjil");
} else {
  console.log("Nilai min pada array genap dan nilai min pada array ganjil memilki nilai yang sama");
}

if (ratarataGanjil >= ratarataGenap) {
  console.log("Rata-rata array ganjil lebih besar dari array genap.");
} else if (ratarataGanjil <= ratarataGenap) {
  console.log("Rata-rata array ganjil lebih kecil dari array genap.");
} else {
  console.log("Rata-rata memiliki nilai yang sama antara array genap dan ganjil.");
}

if (totalGenap === totalGanjil) {
  console.log("Total memiliki nilai yang sama antara array genap dan ganjil.");
} else {
  console.log("Total berbeda antara array genap dan ganjil.");
}

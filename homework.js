// Soal 
// - Diketahui air memiliki kondisi tertentu kapan cair, uap maupun beku, berikut rentangnya
// - Beku suhu minus -100 sampai 0
// - Cair suhu 1 sampai 100
// - Uap suhu 101 sampai 500
// - Suhu selain rentang tersebut tidak terdefinisi

// - Diketahui SPBU memiliki logika sebagai berikut
// - Jika plat kuning atau motor maka BBM subsidi
// - Jika mobil CC kurang dari 1500 maka PERTAMAX
// - Jika mobil CC diatas atau sama dengan 1500 maka pertamax turbo

// Diketahui air memiliki kondisi tertentu kapan cair, uap maupun beku

// console.log("**************** Menggunakan IF Else Biasa ********************************")
// const suhu = -90;

//     if (suhu >= -100 && suhu <= 0){
//         console.log("Beku");
//     } else if (suhu >= 1 && suhu <= 100){
//         console.log("Cair");
//     }else if (suhu >= 101 && suhu <= 500){
//         console.log("Uap");
//     }else {
//         console.log("tidak terdefinisi");
//     }

    // console.log("**************** Menggunakan Operator Ternary ********************************")
    // const suhu = 90;
    // const status =

    // suhu >= 100 && suhu <= 0 
    // ? "Beku"
    // : suhu >= 1 && suhu <= 100
    // ? "Cair"
    // : suhu >= 101 && suhu <= 500
    // ? "Uap"
    // : "tidak terdefinisi" ;

    // console.log(status);
    
console.log ("************ If Else Switch Case *************")
function getStatus(suhu) {
    switch (true) {
      case suhu >= -100 && suhu <= 0:
        return "Beku";
      case suhu >= 1 && suhu <= 100:
        return "Cair";
      case suhu >= 101 && suhu <= 500:
        return "Uap";
      default:
        return "tidak terdefinisi";
    }
  }
  
  const suhu = 90;
  const status = getStatus(suhu);
  console.log(status);
  



// SPBU logika
// function SPBU(warnaplat, jeniskendaraan, CC) {
//     if (warnaplat === 'kuning' || jeniskendaraan === 'motor') {
//       return 'BBM Subsidi';
//     } else if (CC < 1500) {
//       return 'PERTAMAX  ';
//     } else if (CC >= 1500) { 
//       return 'PERTAMAX Turbo';
//     } else {
//         return 'Tidak terdefinisi';
//     }
// }
// console.log(SPBU('kuning'));
// console.log(SPBU('CC', 1500));
// console.log(SPBU('CC', 1200));

console.log("**** IF ELSE TERNARY ****");
function getStatus(Tipe, CC) {
  return Tipe === 'kuning' || Tipe === 'motor'
    ? "BBM Subsidi"
    : CC < 1500
    ? "Pertamax"
    : CC >= 1500
    ? "Pertamax Turbo"
    : "tidak terdefinisi";
}

const CC = 1700; 
const Tipe = "mobil";
const status = getStatus(Tipe, CC);

console.log(status);

// console.log("**** Switch Case ****");
// const Tipe = "motor";
// const CC = 1500;
// let status;

switch (true) {
  case Tipe === 'kuning' || Tipe === 'motor':
    status = "BBM Subsidi";
    break;
  case CC < 1500:
    status = "Pertamax";
    break;
  case CC >= 1500:
    status = "Pertamax Turbo";
    break;
  default:
    status = "tidak terdefinisi";
}

console.log(status);

  

var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true; // Sebelumnya false
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(
    "perkenalkan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang mengikuti " +
      b +
      " berasal dari " +
      asal
  );
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

// Nomor 1

// A
console.log("array = ", lengkap_arr[2]);

// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

// B
// Mengganti let terdaftar menjadi true

// C
console.log(perkenalan());

// Nomor 2
// A . Karena Value terdaftar False, dan perbandinganya harus true
// B . Karena nama menggunakan Const, Const tidak bisa di deklarasi ulang/ diubah
// C . Tidak bisa, karena variabel let bersifat block, jika variabel ada didalam function tidak bisa di panggil diluar function
//  Jadi variabel asal tidak bisa ditemukan

// Nomor 3
{
  const foo = ["budi", "sita", "ayu"];

  const [a, b, c] = foo;
  console.log(a);
  console.log(b);
  console.log(c);
}

// Nomor 4
let umur = ["10-17", "05-19", "20-19"];
let asal = [];

umur.map((day) => {
  asal.push(day.replace("-", "/"));
});

console.log(asal);

// Nomor 5
let Values = [1, 2, 3, 4, 5, 6];

let value = Values.map((x) => x * 2);

console.log(value);

// Nomor 6
let arr = [1.5, 2.5, 5.1, 12.33];
let pembulatan = arr.map((y) => Math.ceil(y));

console.log(pembulatan);
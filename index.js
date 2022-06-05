// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const daftarBarang = (valueArray) => {
  const arrayBarang = []
  for (let counter = 0; counter < valueArray.length; counter++) {
    arrayBarang.push(valueArray[counter].nama + " " + valueArray[counter].kuantitas);
  }
  return arrayBarang;
}
const listBelanjaan = daftarBarang;

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal

const jumlahBelanjaan = (arrayJumlah) => {
  const jumlahArray = [];
  const total = 0;
  for (let counter = 0; counter < arrayJumlah.length; counter++) {
    jumlahArray.push(arrayJumlah[counter].harga * arrayJumlah[counter].kuantitas);
  }
  const hasil = jumlahArray.reduce(
    (angka1, angka2) => angka1 + angka2, total
  )

  return hasil;
}


const totalBelanjaan = jumlahBelanjaan;

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};

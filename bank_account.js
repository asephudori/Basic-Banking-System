// Jumlah saldo awal
let saldo = 50000;

// Menampilkan menu
function tampilkanMenu() {
  while (true) {
    const pilihan = window.prompt(`
      Pilih operasi yang ingin Anda lakukan:
      1. Tambah Saldo
      2. Kurangi Saldo`);

    // Memproses pilihan pengguna
    switch (pilihan) {
      case "1":
        tambahSaldo();
        break;
      case "2":
        kurangiSaldo();
        break;
      default:
        alert("Masukkan pilihan yang valid. Silahkan coba lagi");
    }
  }
}

// Menambah saldo
function tambahSaldo() {
  const tambah = +window.prompt(
    "Masukkan jumlah saldo yang ingin ditambahkan:"
  );
  saldo += tambah;
  alert(`Saldo baru: Rp${saldo}`);
}

// Mengurangi saldo
function kurangiSaldo() {
  const kurang = +window.prompt("Masukkan jumlah saldo yang ingin dikurangi:");
  saldo -= kurang;
  alert(`Saldo baru: Rp${saldo}`);
}

tampilkanMenu();
let saldo = 50000;

class BankAccount {
  constructor() {
    this.balance = saldo || 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Jumlah deposit harus lebih dari 0.");
    } else {
      this.balance += amount;
      console.log(`Deposit berhasil. Saldo baru: Rp${this.balance}`);
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Jumlah penarikan harus lebih dari 0.");
    } else if (amount > this.balance) {
      console.log("Saldo tidak mencukupi untuk penarikan ini.");
    } else {
      this.balance -= amount;
      console.log(`Penarikan berhasil. Saldo baru: Rp${this.balance}`);
    }
  }
}

function tampilkanMenu() {
  const account = new BankAccount();

  while (true) {
    const pilihan = window.prompt(`
      Pilih operasi yang ingin Anda lakukan:
      1. Tambah Saldo
      2. Kurangi Saldo
      3. Cek Saldo
      4. Keluar`);

    switch (pilihan) {
      case "1":
        const tambah = +window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:");
        account.deposit(tambah);
        break;
      case "2":
        const kurang = +window.prompt("Masukkan jumlah saldo yang ingin dikurangi:");
        account.withdraw(kurang);
        break;
      case "3":
        alert(`Saldo saat ini: Rp${account.balance}`);
        break;
      case "4":
        return;
      default:
        alert("Masukkan pilihan yang valid. Silahkan coba lagi");
    }
  }
}

tampilkanMenu();

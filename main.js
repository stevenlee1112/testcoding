/* ====== Isi otomatis menu & harga ====== */
function isiInput(element) {
  const nama  = element.dataset.name;
  const harga = element.dataset.price;

  document.getElementById("namaMenu").value  = nama;
  document.getElementById("hargaMenu").value = harga;
}

/* ====== Validasi & notifikasi saat submit ====== */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // cegah reload bawaan

    // Ambil nilai input
    const customerName = document.getElementById("customerName").value.trim();
    const tableNumber  = document.getElementById("tableNumber").value.trim();

    // Regex: hanya huruf & spasi
    const nameRegex = /^[A-Za-z\s]+$/;

    // Validasi Nama
    if (!nameRegex.test(customerName)) {
      alert("Nama hanya boleh huruf dan spasi!");
      return;
    }

    // Validasi Nomor Meja: wajib angka positif
    if (!/^\d+$/.test(tableNumber) || Number(tableNumber) <= 0) {
      alert("Nomor meja harus berupa angka positif!");
      return;
    }

    /* --- Jika lolos validasi --- */
    alert(
      "PESANAN ANDA SEDANG DIPROSES, TERIMA KASIH ~Nani da suki? KOKO MINTO~"
    );

    // Opsional: kosongkan form setelah submit
    form.reset();
    // Kosongkan juga nama & harga (readonly)
    document.getElementById("namaMenu").value  = "";
    document.getElementById("hargaMenu").value = "";
  });
});

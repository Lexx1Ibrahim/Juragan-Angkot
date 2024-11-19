// Ambil elemen-elemen yang diperlukan
const btnTambah = document.getElementById("btnTambah");
const btnHapus = document.getElementById("btnHapus");
const namaPenumpangInput = document.getElementById("namaPenumpang");
const tarifPenumpangInput = document.getElementById("tarifPenumpang");
const listPenumpang = document.getElementById("listPenumpang");

let penumpangList = [];

// Fungsi untuk menambahkan penumpang
function tambahPenumpang() {
    const nama = namaPenumpangInput.value.trim();
    const tarif = parseFloat(tarifPenumpangInput.value.trim());

    if (nama === "" || isNaN(tarif) || tarif <= 0) {
        alert("Mohon masukkan nama dan tarif yang valid.");
        return;
    }

    // Simpan penumpang ke dalam array
    penumpangList.push({ nama, tarif });

    // Perbarui tampilan daftar penumpang
    renderPenumpang();

    // Bersihkan input setelah ditambahkan
    namaPenumpangInput.value = "";
    tarifPenumpangInput.value = "";
}

// Fungsi untuk merender daftar penumpang
function renderPenumpang() {
    listPenumpang.innerHTML = "";
    penumpangList.forEach((penumpang, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${penumpang.nama} - Rp${penumpang.tarif.toLocaleString()}</span>
            <button onclick="hapusPenumpang(${index})">Hapus</button>
        `;
        
        // Tambahkan elemen li ke dalam list
        listPenumpang.appendChild(li);
    });
}

// Fungsi untuk menghapus penumpang
function hapusPenumpang(index) {
    penumpangList.splice(index, 1);
    renderPenumpang();
}

// Event listener untuk tombol tambah
btnTambah.addEventListener("click", tambahPenumpang);

// Event listener untuk tombol hapus semua
btnHapus.addEventListener("click", () => {
    penumpangList = [];
    renderPenumpang();
});

function hitungJarak() {
    const alamat = document.getElementById("alamat").value;
    document.getElementById("hasil").textContent = "Estimasi ongkir ke " + alamat + " adalah Rp10.000";
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesanan Anda berhasil dikirim!");
});
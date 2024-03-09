function checkPaymentStatus() {
    $.ajax({
      url: "{{url_cek_status}}",
      method: "GET",
      success: function(response) {
        document.getElementById("statusPembayaran").innerHTML = response; // Menampilkan respons HTML di elemen <div>

        // Periksa apakah pembayaran berhasil
        if (response.includes("Terimakasih")) {
          // Pembayaran berhasil, hentikan polling
          document.getElementById("statusPembayaran").innerHTML = "Sudah terbayar"; // Menampilkan respons HTML di elemen <div>
              window.location.href = "https://bukaolshop.net/callback/okeconnect/qris/sukses.html";
        }
        else if (response.includes("Menunggu Pembayaran")) {
          // Pembayaran masih dalam proses, lanjutkan polling setelah 3 detik
          setTimeout(checkPaymentStatus, 3000); // Polling setiap 3 detik (3000 milidetik)
          document.getElementById("statusPembayaran").innerHTML = "Pending"; // Menampilkan respons HTML di elemen <div>
        }
        else if (response.includes("Sesi pembayaran telah berakhir")) {
            document.getElementById("statusPembayaran").innerHTML = "Sesi telah berakhir"; // Menampilkan respons HTML di elemen <div>
        }
      },
      error: function(error) {
        document.getElementById("statusPembayaran").innerText = "Terjadi kesalahan saat memeriksa status pembayaran.";
      }
    });
  }

  $(document).ready(function() {
    checkPaymentStatus();
  });

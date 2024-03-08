function copyIn() {
        var id = "total-bayar"
        document.getElementById(id).select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        Swal.fire({
          title: 'Yeay',
          text: "Berhasil Menyalin",
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
      }

      function goLink(link) {
        window.location.href = link
      }


      var countDownDate = new Date("{{token_expired}}").getTime();
      var x = setInterval(function() {
         var d = new Date()
        var log =  d.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
        var now = new Date(log).getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("exp").innerHTML = minutes + " Menit " + seconds + " Detik";
        if (distance < 0) {
          clearInterval(x);
          document.getElementById('pay').classList.add('d-none');
          document.getElementById("exp").innerHTML = "EXPIRED";
          $("#alertz").removeClass("d-none")
        }
      }, 1000);




      function rubah(angka){
        var reverse = angka.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return "Rp"+ribuan;
      }
      document.getElementById("val-1").innerText=rubah(document.getElementById("val-1").textContent);
      document.getElementById("val-2").innerText=rubah(document.getElementById("val-2").textContent);
      document.getElementById("val-3").innerText=rubah(document.getElementById("val-3").textContent);
      document.getElementById("val-4").innerText=rubah(document.getElementById("val-4").textContent);
      document.getElementById("val-5").innerText=rubah(document.getElementById("val-5").textContent);
        

function generateQRIS() {

            var qrisData = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214028216357989450303UMI51440014ID.CO.QRIS.WWW0215ID20232522062710303UMI5204511153033605802ID5911UKI PAYMENT6010LUWU TIMUR61059198162070703A01630438DB";
            var paymentAmount = "{{total_bayar}}";
            
            var result = "";

            qrisData = qrisData.slice(0, -4);
            var step1 = qrisData.replace("010211", "010212");
            var step2 = step1.split("5802ID");

            var uang = "54" + ("0" + paymentAmount.length).slice(-2) + paymentAmount;
            uang += "5802ID";


            result = step2[0] + uang + step2[1] + convertCRC16(step2[0] + uang + step2[1]);
            // Membuat kode QR menggunakan library QR Code Generator
              var qrcode = new QRCode(document.getElementById("qrcodeContainer"), {
                width: 100,
                height: 100
              });
              qrcode.makeCode(result);
              
              var qrcode2 = new QRCode(document.getElementById("qrcodeContainer2"), {
                width: 250,
                height: 250
              });
              qrcode2.makeCode(result);
        }

    
        function convertCRC16(str) {
            var crc = 0xFFFF;
            var strlen = str.length;

            for (var c = 0; c < strlen; c++) {
                crc ^= str.charCodeAt(c) << 8;

                for (var i = 0; i < 8; i++) {
                    if (crc & 0x8000) {
                        crc = (crc << 1) ^ 0x1021;
                    } else {
                        crc = crc << 1;
                    }
                }
            }

            var hex = crc & 0xFFFF;
            hex = ("000" + hex.toString(16).toUpperCase()).slice(-4);

            return hex;
        }
        